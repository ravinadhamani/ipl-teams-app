import React, { Component } from 'react';
import styles from './styles.module.css'
import logo from './img/logo.png'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import slider1 from './img/image-slide1.png'
import slider2 from './img/image-slide2.png'
import slider3 from './img/image-slide3.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../Context/UserAuthContext";

const Home = () => {
    const [query, setQuery] = useState("");

    const [team] = useState(
        [{ id: "1", name: "Royal Challenger Bangluru", sname: "RCB", preview: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Virat-kohli", TopBowler: "Top Bowler : Harshal Patel", titleWon: "Title Won-5", },
        { id: "2", name: "Chennai Super Kings", sname: "CSK", preview: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Robin Uthappa", TopBowler: "Top Bowler : Ravinder Jadeja", titleWon: "Title Won-5", },
        { id: "3", name: "Mumbai Indians", sname: "MI", preview: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter :Ishan Kishan", TopBowler: "Top Bowler : Jasprit Bumrah", titleWon: "Title Won-5", },
        { id: "4", name: "Kolkata Knight Riders", sname: "KKR", preview: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter :Andre Russel", TopBowler: "Top Bowler : Varun Chakravarthy", titleWon: "Title Won-5", },
        { id: "5", name: "SunRisers Hydrabad", sname: "SRH", preview: "https://static.toiimg.com/photo/msid-72902421/72902421.jpg", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Kane Williamsan", TopBowler: "Top Bowler : Umran Malik", titleWon: "Title Won-5", },
        { id: "6", name: "Rajasthan Royals", sname: "RR", preview: "https://i.pinimg.com/originals/ce/b7/04/ceb7040289e35b9a2358cf18bb6a9315.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Jos Buttler", TopBowler: "Top Bowler : Trent Boult", titleWon: "Title Won-5", },
        { id: "7", name: "Lucknow Super Giants", sname: "LSG", preview: "https://static.toiimg.com/thumb/msid-89248103,imgsize-29332,width-400,resizemode-4/89248103.jpg", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : KL Rahul", TopBowler: "Top Bowler : Ravi Bishnoi", titleWon: "Title Won-5", },
        { id: "8", name: "Gujrat Titans", sname: "GT", preview: "https://gumlet.assettype.com/thequint/2022-02/00692fea-8374-4227-8cc6-c6383903e5cb/FMCjbb3aIAUXqbB.jpg", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Shubhman Gill", TopBowler: "Top Bowler : Rashid Khan", titleWon: "Title Won-5", },
        { id: "9", name: "Dehli Capitals", sname: "DC", preview: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : David Warner", TopBowler: "Top Bowler : Shardul Thakur", titleWon: "Title Won-5", },
        { id: "10", name: "Kings XI Punjab", sname: "KIP", preview: "https://cdn.wionews.com/sites/default/files/inline-images/KingsPunjab.jpg", PlayerCount: "Number of Players : 10", isTeam: true, TopBatter: "Top Batter : Shikhar Dhawan", TopBowler: "Top Bowler : Rahul Chahar", titleWon: "Title Won-5", },
        ]);

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>

            <header id={styles.header}>
                <div id={styles.headerdiv}>
                    <img id={styles.logo} src={logo} alt="Logo" />
                    <Link style={{ textDecoration: 'none' }} to='/home'><span id={styles.iplText}>Home</span></Link>
                    <button className={styles.headerBtns}><Link style={{ textDecoration: 'none' }} to="/addteam"> Create Team </Link></button>
                    <button className={styles.headerBtns}><Link style={{ textDecoration: 'none' }} to="/addplayer"> Create Player </Link></button>
                    <div className={styles.logoutTxt}>
                        Hello Welcome <br />
                        {user && user.email}
                    </div>
                    <div className={styles.logoutBtn}>
                        <Button variant="" onClick={handleLogout}>
                            Log out
                        </Button>
                    </div>
                </div>
            </header>
            <div style={{
                backgroundImage: "url(" + "data:image/jpeg;base64,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" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div>
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img src={slider1} className={styles.sliderimg} alt="1" />
                        <img src={slider2} className={styles.sliderimg} alt="2" />
                        <img src={slider3} className={styles.sliderimg} alt="3" />
                    </AliceCarousel>
                </div>
                <h2 id={styles.allTeams}>All Teams</h2>
                {team
                    .filter((user) => user.sname.toLocaleLowerCase().includes(query))
                    .map((item) => {
                        return (
                            <>
                            <div className={styles.cardsDiv}>
                                <Link style={{ textDecoration: 'none' }} to='/teamdetails' state={{ from: item.sname }}>
                                    <div className={styles.card}>
                                        <img className={styles.cardImgs} src={item.preview} alt="img1" />
                                        <p className={styles.imgText}>{item.sname}</p>
                                    </div>
                                </Link>
                            </div>
                            </>
                        );
                    })}


            </div>

        </>
    );
}


export default Home;

