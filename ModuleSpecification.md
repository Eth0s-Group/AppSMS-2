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
    - $\colorbox{darkblue}{async}$ `send`: Sends a text message.
        - `Parameters`
            1. `UserID <String>`: A string that represents who the message should be sent to.
            2. `Message <String>`: A UTF-8 string containing the message to be sent.
        - `Returns`: $\colorbox{darkgreen}{Message}$ Object or compatible.  Object should represent the message that was sent.
    - $\colorbox{darkblue}{async}$ `send_image` $\colorbox{#805300}{Optional}$: Send an image.  We acknowledge that some platforms may not support images.
        - `Parameters`
            1. `UserID <String>`:  A string that represents who the message should be sent to.
            2. `Message <String>`: A string represental the textual portion of the message to be sent.
            3. `Image <Buffer/Readable Stream>`: Image file to be sent.
            4. `Fallback <String>`: A message to be sent with a textual representation of the image in case the image cannot be sent.
        - `Returns`: $\colorbox{darkgreen}{MultimediaMessage}$ Object or compatible.  Object should represent the message that was sent.
    - $\colorbox{darkblue}{async}$ `send_video` $\colorbox{#805300}{Optional}$: Send a video.  We acknowledge that some platforms may not support video.
        - `Parameters`
            1. `UserID <String>`:  A string that represents who the message should be sent to.
            2. `Message <String>`: A string represental the textual portion of the message to be sent.
            3. `Video <Buffer/Readable Stream>`: Video file to be sent.
            4. `Fallback <String>`: A message to be sent with a textual representation of the image in case the image cannot be sent.
        - `Returns`: $\colorbox{darkgreen}{MultimediaMessage}$ Object or compatible.  Object should represent the message that was sent.
    - $\colorbox{darkblue}{async}$ `send_file` $\colorbox{#805300}{Optional}$: Send a file.  We acknowledge that some platforms may not support files.
        - `Parameters`
            1. `UserID <String>`:  A string that represents who the message should be sent to.
            2. `Message <String>`: A string represental the textual portion of the message to be sent.
            3. `File <Buffer/Readable Stream>`: File to be sent.
            4. `Fallback <String>`: A message to be sent with a textual representation of the file in case the image cannot be sent.
        - `Returns`: $\colorbox{darkgreen}{MultimediaMessage}$ Object or compatible.  Object should represent the message that was sent.

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
                to: <String> //Who the message was to (any kind of string identifier).  If to a group including the bot make the "to" be something that represents the bot.
                content: <String> //String representation of text content of message.
            }
        ```
- ## `Methods`
    - ### $\colorbox{darkblue}{async}$ `reply`: Sends a text message.
        - #### `Parameters`
            1. `Message <String>`: A UTF-8 string containing the message to be sent.
        - #### `Returns`: $\colorbox{darkgreen}{Message}$ Object or compatible.  Object should represent the message that was sent.
    - ### $\colorbox{darkblue}{async}$ `reply_image` $\colorbox{#805300}{Optional}$: Send an image.  We acknowledge that some platforms may not support images.
        - #### `Parameters`
            1. `Message <String>`: A string represental the textual portion of the message to be sent.
            3. `Image <Buffer/Readable Stream>`: Image file to be sent.
            4. `Fallback <String>`: A message to be sent with a textual representation of the image in case the image cannot be sent.
        - #### `Returns`: $\colorbox{darkgreen}{MultimediaMessage}$ Object or compatible.  Object should represent the message that was sent.
    - ### $\colorbox{darkblue}{async}$ `reply_video` $\colorbox{#805300}{Optional}$: Send a video.  We acknowledge that some platforms may not support video.
        - #### `Parameters`
            1. `Message <String>`: A string represental the textual portion of the message to be sent.
            3. `Video <Buffer/Readable Stream>`: Video file to be sent.
            4. `Fallback <String>`: A message to be sent with a textual representation of the image in case the image cannot be sent.
        - #### `Returns`: $\colorbox{darkgreen}{MultimediaMessage}$ Object or compatible.  Object should represent the message that was sent.
    - ### $\colorbox{darkblue}{async}$ `reply_file` $\colorbox{#805300}{Optional}$: Send a file.  We acknowledge that some platforms may not support files.
        - #### `Parameters`
            1. `Message <String>`: A string represental the textual portion of the message to be sent.
            3. `File <Buffer/Readable Stream>`: File to be sent.
            4. `Fallback <String>`: A message to be sent with a textual representation of the file in case the image cannot be sent.
        - #### `Returns`: $\colorbox{darkgreen}{MultimediaMessage}$ Object or compatible.  Object should represent the message that was sent.

# `MultimediaMessage`