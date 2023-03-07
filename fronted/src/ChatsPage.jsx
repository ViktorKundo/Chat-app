import { PrettyChatWindow} from "react-chat-engine-pretty"

const ChatsPage  = (props) => {
 
    return (
        <div style ={{ height:"100vh"}}>
            <PrettyChatWindow 
                projectId="f538ece9-a79f-408f-a224-d2ab62c93927"
                username={props.user.username}
                secret={props.user.secret}
                style={{height:"100%"}}
            />
        </div>
    )
}

export default ChatsPage