# WiP (Work in Progress)

# Communications Module Specification

A specification for standardizing communications modules for this app.  Classes can be renamed, but must contain at minimum the standard variables and functions to remain compatible if plugged into existing code.  This is an incomplete list and it is easy for the team to add new items.  Please reach out if you would like to do something cool that needs something that we don't yet have or properly support.

# `Communications` Class

Your class for implementing a module to communicate with a new platform.

- ## `Constructor`
    - `Parameters`
        1. `API <TBA>`: A custom API for interacting with the main program.  Will be used to implement consolidated secret token storage, user accounts, and "conversations".
    - `Properties`
        - `me <String>`: A string that represents the bot's user identification.
- ## `Methods`
    - ### $\colorbox{darkblue}{async}$ `send`: Sends a text message.
        - `Parameters`
            1. `UserID <String>`: A string that represents who the message should be sent to.
            2. `Message <String>`: A UTF-8 string containing the message to be sent.
            3. `Attachments <Attachment[]>` : An array of $\colorbox{darkgreen}{Attachment}$ objects defining attachments to be attached to the message or compatible.
        - `Returns`: $\colorbox{darkgreen}{Message}$ Object or compatible.  Object should represent the message that was sent.

- ## `Events`
    - `"message"`: The message event indicates a new message has been received.  Should include an instance of message or a compatible object.  After ready, should fire all unread messages that were missed since the last launch if applicable.
    - `"ready"`: Indicates that the module is ready to start sending and receiving messages.
    - `"error"`: Indicates that an error has occured.

# `Message` Class

Your class for individual messages.
> **Note**
> Yes, I intentionally left out timestamps.  I do not see any use for them being standard at this time.

- ## `Constructor`
    - ### `Parameters`
        ```js
            {
                from: <String> //Who the message is from (any kind of string identifier).
                to: <String> /*Who the message was to (any kind of string identifier).
                If to a group including the bot make the "to" be something that represents the bot.*/
                content: <String> //String representation of text content of message.
                attachments: <Attachment[]> //Attachment objects representing attachments sent with the message. (Optional)
            }
        ```
- ## `Methods`
    - ### $\colorbox{darkblue}{async}$ `reply`: Sends a text message.
        - `Parameters`
            1. `Message <String>`: A UTF-8 string containing the message to be sent.
            2. `Attachments <Attachment[]>` : An array of $\colorbox{darkgreen}{Attachment}$ objects defining attachments to be attached to the message or compatible.
        - `Returns`: $\colorbox{darkgreen}{Message}$ Object or compatible.  Object should represent the message that was sent.

# `Attachment` Typedef

Your type for defining options of elements to include in a message.

- ## `Properties`
    - ### `name <String>`: Name of the file.
    - ### `file <Buffer/Readable Stream>`: The file data for the attachment to be sent.
    - ### `mimeType <String>`: `String` MIME type of the file.
    - ### `alt <String>`: The `String` to be displayed if the file can't be sent.