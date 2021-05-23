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
import pt from "../../assets/images/pt.png"
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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide_1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                                      <DetailCard title={"Supplyment 1"} description={"dddasd"} image={diet_plan}/>
                                      <DetailCard title={"dasdasd"} description={"dddasd"} image={diet_plan}/>
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
                                        <p>Yoga Class Levels and Descriptions:
                                            Levels:

                                            I – Very gentle. No experience needed. Appropriate for individuals with
                                            physical challenges.
                                            II – Low intensity. No experience needed.
                                            III – Moderate intensity. No experience needed, but good body awareness is
                                            helpful.
                                            IV – Vigorous intensity. Though no experience necessary, some prior yoga
                                            experience, or good body awareness is recommended.
                                            Yoga Nidra – I

                                            Yoga Nidra, also known as yogic sleep, is a guided meditation technique,
                                            performed in savasana or resting position on your back. This guided
                                            meditation guides you through 5 stages to allow you to reboot and end the
                                            practice feeling completely rejuvenated.
                                            Restorative Yoga – I

                                            This class is designed with gentle floor based sequences using bolsters,
                                            blankets, and props that support the practitioner to fully relax the
                                            muscles, slow down the mental activity of the brain, shift emotional
                                            patterns, bring ease to the breath, and tune into the nervous system’s
                                            healing capacity. This hour long class is perfect for any age or level
                                            student.
                                            Therapeutic Yoga – I

                                            Therapeutic yoga classes are gentle and include yoga poses modified to
                                            individual’s needs, gentle movement sequences to help improve the body’s
                                            movement patterns, yogic breath techniques, and guided relaxation. Each
                                            class is structured to address a region or system of the body that may need
                                            balancing for better health and well being.

                                            These classes are appropriate for individuals with musculoskeletal dis-ease
                                            or injury, neuromuscular issues, chronic pain, balance or movement deficits,
                                            anxiety or depression, respiratory issues, or other imbalances or
                                            dysfunctions that individuals may suffer.
                                            Mindfulness Yoga – I – Gentle Joints

                                            This class incorporates yoga postures, gentle movement sequences, breath
                                            work, supported silent meditation, and guided relaxation to support
                                            increased awareness and mindfulness of the breath and body, and quieting of
                                            the nervous system. This class is a gentle joints practice, so there is no
                                            weight bearing through the knees or wrists. Chairs are available.

                                        </p>
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
                                        <p>martial arts and self defence curriculum, beginning with Taekwondo, Weapons
                                            training and Muay Thai/Kickboxing, and later on incorporating Brazilian Jiu
                                            Jitsu classes and Mixed Martial Arts
                                            Take your body to the next level and reach fitness heights you didn’t know
                                            possible, all while learning traditional martial arts!

                                            Bullyproof your kids and provide them with essential life tools from martial
                                            arts training such as fitness, strength, focus, discipline and CONFIDENCE!

                                            World Class Instructors – Train with Champions, train like a Champion, BE A
                                            CHAMPION.

                                        </p>
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
                    <p>123-c ranjiy avenve</p>


                    <h6>Phone</h6>
                    <p>12784245548</p>


                    <h6>Email</h6>
                    <p>12784245548@h.com</p>


                    <h6>Working hours</h6>
                    <p>Saturday- Subnday 10am to 8pm</p>

                </div>

            </Container>
        </div>
    </div>


}