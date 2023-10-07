import { TwitterFollowCard } from "./TwitterFollowCard"


const users = [
    {
        userName: 'atarico',
        name: 'Agustin Tarico',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Migel Angel Duran',
        isFollowing: false
    },
    {
        userName: 'goncy',
        name: 'Gonzalo Pozo',
        isFollowing: false
    },
    {
        userName: 's4vitar',
        name: 'Marcelo Vazquez',
        isFollowing: false
    }
]


export const App = () => {
  return (
    <section className="followCards">
        <h2>A quien seguir </h2> 
         {
            users.map(({ userName, name, isFollowing }) => {
                
                return(
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>

                )
            })
         }
    </section>
  )
}
