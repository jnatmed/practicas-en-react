import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const format = (username) => `@${username}`

    return (
        <>
            <TwitterFollowCard 
                formatUserName={format}
                isFollowing 
                userName="midudev" 
                name="Miguel Angel Durán"
            />
            <TwitterFollowCard 
                formatUserName={format}
                isFollowing={false} 
                userName="pheralb" 
                name="Pablo Hernandez"
            />
            <TwitterFollowCard 
                formatUserName={format}
                userName="elonmusk" 
                name="Elon Musk"
            />
            <TwitterFollowCard 
                formatUserName={format}
                userName="vxnder" 
                name="Vanderhart"
            />
        </>
    )
}