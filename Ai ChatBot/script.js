let inputVal=document.querySelector('#inputBox');
const chatBody=document.querySelector("#chatBody");
const sendBtn=document.querySelector("#send")
const API_KEY="AIzaSyDH3cf5S1piQhed664lWHZmsmWBjStfjkk";
const API_URL=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const userData={
    file:{
        data:null,
        mime_type:null
    }
}

const showTypingIndicator = () => {
    const typingDiv = document.createElement("div");
    typingDiv.className = "p-3 bg-blue-300 text-gray-800 rounded-md max-w-[75%] self-start shadow flex items-center gap-2";
    typingDiv.innerHTML = `<span>🤖</span> <span>...</span>`;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
    return typingDiv;
};


 const generateBotResponse = async (userMessage) => {
   const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
             contents: [{
                 parts: [{ text: userMessage },...(userData.file.data? [{inline_data:userData.file}]:[])]
             }]
         })
     };

     try {
         const response = await fetch(API_URL, requestOptions);
         const data = await response.json();

         if (!response.ok) throw new Error(data.error?.message || "API request failed");

         console.log("Bot Response:", data);
         return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand.";
     } catch (error) {
        //  console.error("Error fetching bot response:", error.message);
         return "Oops! Something went wrong.";
     }
 };


const createMessageElement=(content,classes)=>{
    const div=document.createElement("div");
    div.className = "p-3 bg-slate-700 rounded-md max-w-[75%] self-end shadow-lg text-white " + classes;
    div.innerHTML=content;
    return div;
} 
const createMessageElementBot=(content,classes)=>{
    const div=document.createElement("div");
    div.className = "p-3 bg-blue-200 rounded-md max-w-[75%]  shadow-lg  " + classes;
    div.innerHTML=content;

    return div;
} 
const handleOngoingMsg = async (userMessage) => {
    if (!userMessage.trim()) return;

    // Add User Message (Right)
    const userMsgElement = createMessageElement(userMessage, "user-message");
    chatBody.appendChild(userMsgElement);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Show Typing Indicator
    const typingIndicator = showTypingIndicator();

    // 🔹 Wait for Bot Response
    const botResponse = await generateBotResponse(userMessage);

    // Remove Typing Indicator
    chatBody.removeChild(typingIndicator);

    // Add Bot Response (Left)
    const botMsgElement = createMessageElementBot(botResponse, "bot-message");
    chatBody.appendChild(botMsgElement);
    botMsgElement.classList.add("bg-teal-100")
   
    
    setTimeout(() => {
        botMsgElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    inputVal.value = ""; // Clear Input
};



inputVal.addEventListener("keydown",(e)=>{
    const userMessage=e.target.value.trim();
    if(e.key === 'Enter' && userMessage && !e.shiftKey){
        e.preventDefault();
      handleOngoingMsg(userMessage);
    }
    
});
sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const userMessage = inputVal.value.trim(); // ✅ Get input value when clicking
    if (userMessage) {
        handleOngoingMsg(userMessage);
    }
});

const fileInput=document.querySelector('#file-input');
fileInput.addEventListener("change",()=>{
    const file=fileInput.files[0];
    if(!file) return;
    const reader=new FileReader();
    reader.onload=(e)=>{
        const base64String=e.target.result.split(","[1])
        userData.file={
            data:base64String,
            mime_type:file.type
        }
        fileInput.value='';
    }
    reader.readAsDataURL(file)
})
document.querySelector("#file-upload").addEventListener("click",()=>fileInput.click());

const picker = new EmojiMart.Picker({
    theme:"light",
    skinTonePosition:"none",
    previewPosition:"none",
    onEmojiSelect:(emoji)=>{
       const { selectionStart:start,selectionEnd:end }=inputVal;
       inputVal.setRangeText(emoji.native,start,end,"end");
       inputVal.focus();
    }
    ,onClickOutside:(e)=>{
        if(e.target.id==="emoji"){
            document.body.classList.toggle("emoji-picker")
        }else{
            document.body.classList.remove("emoji-picker")
        }
    }
})

document.querySelector(".chat-form").appendChild(picker)