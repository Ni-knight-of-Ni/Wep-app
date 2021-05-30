//dette er for at opsætte en andens beskeder
const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    //denne indeholder brugerens avatar billedet, og hvis de sender billeder, og deres tekst beskeder. disse skal stå til venstre
    return (

      //container der indeholder vores beskeder som Chatengien arbejder med
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
                />
            )}
            //Indeholdet på beskderne, endten skal beskeden havde en text længeder der er støre en 0
            //eller havde et billede og text sendt med sig.
            {message.attachments && message.attachments.length > 0
                ? (
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    />
                )
                : (
                    <div className="message" style={{ float: 'left', backgroundColor: 'white', color: 'black', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )}
        </div>
    );
};
//exporter functionen så den kan bruges andre steder
export default TheirMessage;
