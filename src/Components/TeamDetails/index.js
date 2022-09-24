import React from 'react';
import styles from './styles.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const TeamDetails = (props) => {
    const location = useLocation()
    
    const { from } = location.state
    //console.log(from)
    const [query, setQuery] = useState("");
    const [team] = useState(
        [{ id: "1", name: "Royal Challenger Bangluru", sname: "RCB", preview: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Virat-kohli", TopBowler: "Top Bowler : Harshal Patel", titleWon: "Title Won-5", },
        { id: "2", name: "Chennai Super Kings", sname: "CSK", preview: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Robin Uthappa", TopBowler: "Top Bowler : Ravinder Jadeja", titleWon: "Title Won-5", },
        { id: "3", name: "Mumbai Indians", sname: "MI", preview: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter :Ishan Kishan", TopBowler: "Top Bowler : Jasprit Bumrah", titleWon: "Title Won-5", },
        { id: "4", name: "Kolkata Knight Riders", sname: "KKR", preview: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter :Andre Russel", TopBowler: "Top Bowler : Varun Chakravarthy", titleWon: "Title Won-5", },
        { id: "5", name: "SunRisers Hydrabad", sname: "SRH", preview: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Kane Williamsan", TopBowler: "Top Bowler : Umran Malik", titleWon: "Title Won-5", },
        { id: "6", name: "Rajasthan Royals", sname: "RR", preview: "https://i.pinimg.com/originals/ce/b7/04/ceb7040289e35b9a2358cf18bb6a9315.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Jos Buttler", TopBowler: "Top Bowler : Trent Boult", titleWon: "Title Won-5", },
        { id: "7", name: "Lucknow Super Giants", sname: "LSG", preview: "https://static.toiimg.com/thumb/msid-89248103,imgsize-29332,width-400,resizemode-4/89248103.jpg", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : KL Rahul", TopBowler: "Top Bowler : Ravi Bishnoi", titleWon: "Title Won-5", },
        { id: "8", name: "Gujrat Titans", sname: "GT", preview: "https://gumlet.assettype.com/thequint/2022-02/00692fea-8374-4227-8cc6-c6383903e5cb/FMCjbb3aIAUXqbB.jpg", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Shubhman Gill", TopBowler: "Top Bowler : Rashid Khan", titleWon: "Title Won-5", },
        { id: "9", name: "Dehli Capitals", sname: "DC", preview: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : David Warner", TopBowler: "Top Bowler : Shardul Thakur", titleWon: "Title Won-5", },
        { id: "10", name: "Kings XI Punjab", sname: "KIP", preview: "https://cdn.wionews.com/sites/default/files/inline-images/KingsPunjab.jpg", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Shikhar Dhawan", TopBowler: "Top Bowler : Rahul Chahar", titleWon: "Title Won-5", },
        ]);
    const filteredIteam = team
        .filter((user) => user.sname.includes(from))?.[0]
    console.log("filteredIteam", filteredIteam)

    
    return (
        <>
           <Link to='/playerdetails'> 
                <div id={styles.cardsDiv}>
                    <div className={styles.card}>
                        <img className={styles.cardImgs} src={filteredIteam.preview} alt={filteredIteam} />
                        <p className={styles.imgText}>{filteredIteam.name}</p>
                    </div>
                </div>
           </Link> 
        </>
    )
}

export default TeamDetails;