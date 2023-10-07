import { TwitterFollowCard } from "./TwitterFollowCard"


export const App = () => {
  return (
    <section className="followCards">
        <TwitterFollowCard userName='atarico' initialIsFollowing={true}>
            Agustin Tarico
        </TwitterFollowCard>
        
        <TwitterFollowCard userName='midudev' >
            Miguel Angel Duran    
        </TwitterFollowCard>    

        <TwitterFollowCard userName='goncy'>
            Gonzalo Pozo
        </TwitterFollowCard>    

        <TwitterFollowCard userName='s4vitar'>
            Marcelo Vazquez    
        </TwitterFollowCard>    
    </section>
  )
}
