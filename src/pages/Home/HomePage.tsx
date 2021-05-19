import React, {useCallback, useContext, useEffect, useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import "./style.scss"
import AboutPage from "../About/AboutPage";
import {AppStateContext} from "../../App";
import {Redirect,} from "react-router-dom";

import yoga from "../../assets/images/yoga.jpg"
import diet_plan from "../../assets/images/diet_plan.jpg"
import ma from "../../assets/images/ma.jpeg"
import workout from "../../assets/images/workout.webp"
import supliment from "../../assets/images/supliment.jpg"
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
    if (!loggedInUser) {
        return <Redirect to={"/user/login"}/>
    }
    return <div>
        <div>
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
                                        <p>1. Creatine

                                            Creatine is perhaps the most efficient supplement if you're doing a
                                            high-intensity activity, but if your primary exercise consists of aerobics
                                            and you're aiming for an increase in work capacity, creatine would be a
                                            complete waste of money.

                                            Few supplements have the solid scientific foundation that creatine has.
                                            Studies show that it's effective for 80 percent of those who use it. Since
                                            creatine is found naturally in meat, the more meat you eat, the less likely
                                            you'll need creatine supplementation. Vegetarians or those who rarely eat
                                            meat, however, can get huge boosts from most creatine supplements.

                                            Creatine's primary use is as a backup phosphate donor for the replenishment
                                            of ATP, the most elemental form of energy and the source of energy for all
                                            muscular contractions. In other words, creatine acts like a second battery
                                            in your car. It's also a buffer, helping neutralize the acidity that blunts
                                            energy production in trained muscle.

                                            The major controversies regarding creatine are its side effects and the best
                                            form to use. Nearly all side effects attributed to creatine, such as muscle
                                            cramps, kidney disease and gastrointestinal disturbances, haven't proved
                                            significant under controlled scientific scrutiny. Although various claims
                                            are made for a variety of creatine supplements, creatine monohydrate, which
                                            is 99 percent absorbed, is the best form to use.

                                            2. Casein-Whey Protein Supplements

                                            Milk protein consists of 80 percent casein and 20 percent whey, and that's
                                            the best combination for promoting a positive nitrogen balance in
                                            bodybuilders. That's because casein is a slow-acting protein that delivers
                                            its amino acids over a period of seven hours, and whey is a fast-acting
                                            protein, peaking in 90 minutes.

                                            The faster a protein is absorbed, the faster the liver oxidizes its amino
                                            acids. That sounds bad, but whey's rapid delivery of amino acids also favors
                                            increased protein synthesis. A longer-acting protein, such as casein,
                                            prevents the excess breakdown of protein, an anticatabolic effect, which
                                            ultimately promotes an anabolic effect - growth.

                                            Besides the high-quality protein content of casein/whey, the newer
                                            formulations have little or no lactose (i.e., milk sugar), which some people
                                            have negative reactions to. The native milk proteins also provide a host of
                                            smaller proteins called peptides, many of which, such as lactoferrin, have
                                            vital health benefits. The rich cysteine content of whey acts as a precursor
                                            of glutathione, a primary endogenous antioxidant and liver detoxifier in the
                                            body.

                                            3. Omega-3 Fatty Acids

                                            If you don't eat fatty fish at least three times a week, you'll be deficient
                                            in omega-3 fatty acids. Studies suggest that's the case with about 80
                                            percent of people. Since the brain is composed of 40 percent DHA, one of the
                                            omega-3s, a long-term lack may cause aberrations in brain neurotransmitter
                                            function, resulting in depression and aggression.

                                            Omega-3s provide numerous health benefits. Recent studies show that
                                            middle-aged people who eat diets rich in omega-3 fats have a 75 percent
                                            decreased incidence of Alzheimer's disease. Omega-3s help prevent several
                                            types of cancer, including breast and prostate cancers.

                                            They improve insulin sensitivity and make cellular membranes more pliable so
                                            that hormones can more efficiently interact with cellular receptors. Some
                                            studies suggest that a generous intake of omega-3, at least five grams
                                            daily, blunts body fat synthesis and reduces inflammation, which can help
                                            relieve sore joints and muscles.

                                            You should know that there's an initial inflammatory feature of muscular
                                            hypertrophy, or growth that can be blunted by omega-3 fats and other drugs.
                                            The solution is simply not to take omega-3s before training.

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
    </div>


}