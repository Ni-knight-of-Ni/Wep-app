//dette er til hvis det er et billede man sender. det skal stå til højre da det er hvis det er os selv der sender billedet
const MyMessage = ({ message }) => {
    if (message.attachments && message.attachments.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        );
    }
    //dette er hvis det er en tekst besked. det skal stå til højre, da det er vores egne beskeder
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'black', backgroundColor: 'white' }}>
            {message.text}
        </div>
    );
};

export default MyMessage;