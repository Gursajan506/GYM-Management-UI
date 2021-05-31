import React, {useCallback, useContext, useEffect, useState} from "react";
import {Card, Carousel, Col, Container, Row} from "react-bootstrap";
import "./style.scss"
import AboutPage from "../About/AboutPage";
import {AppStateContext} from "../../App";
import {Redirect,} from "react-router-dom";

import yoga from "../../assets/images/yoga.jpg"
import diet_plan from "../../assets/images/diet_plan.jpg"
import ma from "../../assets/images/ma.jpeg"
import workout from "../../assets/images/workout.webp"
import supliment from "../../assets/images/supliment.jpg"
import slide_1 from "../../assets/slider-img2.jpg"
import slide_2 from "../../assets/images/slide-4.jpg"
import slide_3 from "../../assets/images/slide-3.jpg"
import pt from "../../assets/images/pt.png"
import whey from "../../assets/whey.jpg"
import creatine from "../../assets/creatine.jpg"
import aminoacids from "../../assets/aminoacids.jpg"
import postworkout from "../../assets/Postworkout.jpg"
import preworkout from "../../assets/preworkout.png"
import hatya from "../../assets/hatha-yoga.webp"
import bikram from "../../assets/bikram.jpg"
import kundalini from "../../assets/Kundalini.jpg"
import vinyasa from "../../assets/Vinyasa.jpg"
import aikido from "../../assets/aikido.jpg"
import sambo from "../../assets/sambo.jpg"
import kungfu from "../../assets/kungfu.jpg"
import karate from "../../assets/karate.jpg"
import judo from "../../assets/judo.jpg"
import {iDietPlan} from "../../apis/admin/admin.diet.plan.apis";
import {iWorkout} from "../../apis/admin/admin.workout.apis";
import {iTrainer} from "../../apis/admin/admin.trainer.apis";
import AdminDashboardAPIs from "../../apis/admin/dashbord.apis";
import useIsMounted from "ismounted";
import DetailCard from "./Detail.Card";
import {CustomLoader} from "../../Components/CustomLoader";

export default function HomePage() {


    const {loggedInUser} = useContext(AppStateContext);
    const [showDietPlan, _showDietPlan] = useState(false);
    const [showDailyWorkout, _showDailyWorkout] = useState(false);
    const [showSupplement, _showSupplement] = useState(false);
    const [showYoga, _showYoga] = useState(false);
    const [showPT, _showPT] = useState(false);
    const [showMA, _showMA] = useState(false);
    const [diets,setDiets]=useState<iDietPlan[]>([]);
    const [workouts,setWorkouts]=useState<iWorkout[]>([]);
    const [trainers,setTrainers]=useState<iTrainer[]>([]);

    const isMounted = useIsMounted();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();
    const loadDashboard = useCallback(() => {
        setLoading(true)
        new AdminDashboardAPIs().get_user_dashboard().then((res) => {
            if (isMounted.current) {
                if (AdminDashboardAPIs.hasError(res)) {
                    setError(res.message)
                } else {
                    if(res.dashboard){
                        setWorkouts(res.dashboard.workouts)
                        setTrainers(res.dashboard.trainers)
                        setDiets(res.dashboard.diet_plans)
                    }
                    setLoading(false)
                }
            }
        })
    }, [isMounted])
    useEffect(()=>{
        loadDashboard();
    },[])
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex:any, e:any) => {
        setIndex(selectedIndex);
    };
    if (!loggedInUser) {
        return <Redirect to={"/user/login"}/>
    }
    return <div>
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>HARDWORK</h3>
                        <p>'All progress takes place outside the comfort zone.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>DISCIPLINE</h3>
                        <p>Success usually comes to those who are too busy to be looking for it.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide_3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>REGULAR WORKOUT</h3>
                    <p> ‘The clock is ticking. Are you becoming the person you want to be?.</p>
                </Carousel.Caption>
            </Carousel.Item>


            </Carousel>
        </div>
        <div className="mt-5">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/3Q-P923MMx8"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
        <div className="what-we-offer">

            <Container>
                <div>
                    <h5 className="text-center">
                        What we offer
                    </h5>
                </div>
                <Row className="what-we-offer-row">
                    <Col md={4}>
                        <Card>
                            <div className="what-we-offer-card">

                                <h6>
                                    Diet Planning
                                </h6>

                                <img src={diet_plan} onClick={() => {
                                    _showDietPlan(!showDietPlan)
                                }}/>
                                {
                                    !loading && showDietPlan && <div className="plan-features">
                                        {diets && diets.map((diet)=>{
                                            return <DetailCard key={diet.id} {...diet}/>
                                        })}
                                    </div>
                                }

                                {
                                    loading && showDietPlan && <CustomLoader/>
                                }
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <div className="what-we-offer-card">
                                <h6>
                                    DAILY WORKOUT
                                </h6>
                                <img src={workout} onClick={() => {
                                    _showDailyWorkout(!showDailyWorkout)
                                }}/>
                                {
                                    !loading && showDailyWorkout && <div className="plan-features">
                                        {workouts && workouts.map((diet)=>{
                                            return <DetailCard key={diet.id} {...diet}/>
                                        })}
                                    </div>
                                }
                                {
                                    loading && showDailyWorkout && <CustomLoader/>
                                }
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <div className="what-we-offer-card">
                                <h6>
                                    SUPPLEMENTS
                                </h6>
                                <img src={supliment} onClick={() => {
                                    _showSupplement(!showSupplement)
                                }}/>
                                {
                                    showSupplement && <div className="plan-features">
                                      <DetailCard title={"WHEY PROTEIN"} description={"Whey protein is the protein contained in whey, the watery portion of milk that separates from the curds when making cheese. Whey protein is commonly used for improving athletic performance and increasing strength, but evidence to support these uses is mixed.\n" +
                                      "\n"} image={whey}/>
                                      <DetailCard title={"CREATINE"} description={"Creatine increases the body’s ability to produce energy rapidly. Creatine exists naturally in our bodies and helps fuel our muscles, which is why some people take it as a supplement to boost their performance in the gym."} image={creatine}/>
                                        <DetailCard title={"AMINO ACIDS"} description={"Amino acids are sometimes referred to as the building blocks of life or the building blocks of protein. They are organic compounds that the human body uses to help form protein. All amino acids contain oxygen, carbon, hydrogen, and nitrogen."} image={aminoacids}/>
                                        <DetailCard title={"PREWORKOUT"} description={"Pre-workout supplements, which are powdered and mixed with water, are advertised to improve athletic performance and energy prior to exercise. However, there’s no set list of ingredients."} image={preworkout}/>
                                        <DetailCard title={"POSTWORKOUT"} description={"post-workout supplements include glutamine, BCAAs, and casein protein. They help muscles recover and can increase muscle synthesis."} image={postworkout}/>

                                    </div>
                                }
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <div className="what-we-offer-card">
                                <h6>
                                    YOGA SESSIONS
                                </h6>
                                <img src={yoga} onClick={() => {
                                    _showYoga(!showYoga)
                                }}/>
                                {
                                    showYoga && <div className="plan-features">
                                        <DetailCard title={"HATYA YOGA"} description={"Hatha Yoga in ways that take you beyond certain limitations, but fundamentally, it is a physical preparation – preparing the body for a higher possibility"} image={hatya}/>
                                        <DetailCard title={"BIKRAM YOGA"} description={" Bikram yoga, sometimes called the original hot yoga style, is a whole different ball game. Technically, Bikram is a version of Hatha, a traditional branch of yoga that combines postures and breathing. "} image={bikram}/>
                                        <DetailCard title={"KUNDALINI YOGA"} description={"Kundalini yoga is a form of yoga that involves chanting, singing, breathing exercises, and repetitive poses.Its purpose is to activate your Kundalini energy, or shakti. This is a spiritual energy that’s said to be located at the base of your spine."} image={kundalini}/>
                                        <DetailCard title={"VINAYASA"} description={"Vinyasa is a style of yoga characterized by stringing postures together so that you move from one to another, seamlessly, using breath.  Commonly referred to as “flow” yoga, it is sometimes confused with “power yoga“."} image={vinyasa}/>

                                    </div>
                                }
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <div className="what-we-offer-card">
                                <h6>
                                    PERSONAL TRAINER
                                </h6>
                                <img src={pt} onClick={() => {
                                    _showPT(!showPT)
                                }}/>
                                {
                                    !loading && showPT && <div className="plan-features">
                                        {trainers && trainers.map((diet)=>{
                                            return <DetailCard key={diet.id} title={diet.name} description={diet.experience} image={diet.image}/>
                                        })}
                                    </div>
                                }
                                {
                                    loading && showPT && <CustomLoader/>
                                }
                            </div>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <div className="what-we-offer-card">
                                <h6>
                                    MARTIAL ARTS
                                </h6>
                                <img src={ma} onClick={() => {
                                    _showMA(!showMA)
                                }}/>
                                {
                                    showMA && <div className="plan-features">
                                        <DetailCard title={"AIKIDO MARTIAL ARTS"} description={"The Japanese martial art of Aikido is a comprehensive system of throwing, joint-locking, striking and pinning techniques, coupled with training in traditional Japanese weapons such as the sword, staff and knife."} image={aikido}/>
                                        <DetailCard title={"SAMBO MARTIAL ARTS"} description={"Sambo is a Soviet martial art, an internationally-practised combat sport, and a recognized style of amateur wrestling included by UWW in the World Wrestling Championships along with Greco-Roman wrestling and freestyle wrestling."} image={sambo}/>
                                        <DetailCard title={"KUNG FU"} description={"n general, kung fu/kungfu refers to the Chinese martial arts also called wushu and quanfa. In China, it refers to any study, learning, or practice that requires patience, energy, and time to complete."} image={kungfu}/>
                                        <DetailCard title={"KARATE"} description={"Practicing karate provides many physical benefits including improved physical conditioning and coordination. It also provides self-confidence from learning self-defense techniques along with developing self-discipline and improved focus."} image={karate}/>
                                        <DetailCard title={"JUDO"} description={"Judo is a rigorous and demanding physical activity. The practice of judo techniques helps people develop basic and fundamental physical fitness in a number of ways, such as the development of strength, flexibility, agility, speed, dynamic and static balance, explosive power, and endurance."} image={judo}/>

                                    </div>
                                }
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
        <div className="app-body-packages">
            <h5>
                Packages
            </h5>
            <Container>
                <Row className="app-body-packages-plans">
                    <Col className="app-body-packages-plan">
                        <div className="plan-heading">
                            QUARTERLY MEMBERSHIP
                            9000 for 3 months
                        </div>
                        <div className="plan-features">
                            <ul>
                                <li>
                                    GYMING (morning and evening batches)
                                </li>
                                <li>
                                    AEROBIOCS
                                </li>
                                <li>
                                    CARDIO SESSIONS
                                </li>
                                <li>
                                    YOGA SESSIONS
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="app-body-packages-plan">
                        <div className="plan-heading">
                            HALF YEAR MEMBERSHIP
                            12000 FOR 6 MONTHS
                        </div>
                        <div className="plan-features">
                            <ul>
                                <li>
                                    HARDCORE EXERCISES
                                </li>
                                <li>
                                    ONE-ONE PERSONAL TRAINING
                                </li>
                                <li>
                                    PRE WORKOUT AND POST WORKOUT MEALS
                                </li>
                                <li>
                                    FLOOR EXERCISES
                                </li>
                                <li>
                                    YOGA SESSIONS
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="app-body-packages-plan">
                        <div className="plan-heading">
                            YEARLY MEMBERSHIP
                            16000 PER 12 MONTHS
                        </div>
                        <div className="plan-features">
                            <ul>
                                <li>
                                    ALL GYM EQUIPMENT ALLOWANCE
                                </li>
                                <li>
                                    PERSONAL TRAINING
                                </li>
                                <li>
                                    FREE PRE WORKOUT MEALS
                                </li>
                                <li>
                                    EXERCISES
                                </li>
                                <li>
                                    CARDIO SESSIONS
                                </li>
                                <li>
                                    YOGA SESSIONS
                                </li>
                                <li>
                                    MARTIAL ARTS
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <AboutPage/>
        <div>
            <Container>
                <div>
                    <h5 className="text-center" style={{fontSize:"24px"}}>How to Find Us</h5>


                    <h6>Address</h6>
                    <p>123-c ranjit avenve</p>


                    <h6>Phone</h6>
                    <p>9098480001</p>


                    <h6>Email</h6>
                    <p>sajanrandhawa093@gmail.com</p>


                    <h6>Working hours</h6>
                    <p>Saturday- Sunday 10am to 8pm</p>

                </div>

            </Container>
        </div>
    </div>


}