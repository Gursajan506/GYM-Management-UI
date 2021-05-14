import React, {useContext, useState} from "react";
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

export default function HomePage() {


    const {loggedInUser} = useContext(AppStateContext);
    const [showDietPlan, _showDietPlan] = useState(false);
    const [showDailyWorkout, _showDailyWorkout] = useState(false);
    const [showSupplement, _showSupplement] = useState(false);
    const [showYoga, _showYoga] = useState(false);
    const [showPT, _showPT] = useState(false);
    const [showMA, _showMA] = useState(false);

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
                                    showDietPlan && <div className="plan-features">
                                        <p>Day 1
                                            Breakfast Oats Banana Pancakes with
                                            Protein Shake
                                            Lunch Multigrain roti with palak chicken Avocado bell pepper salad
                                            Pre-Workout Snack Bananas
                                            Dinner
                                            (Post-Workout) Brown rice, peas paneer curry, sprouts vegetable salad


                                            Day 2
                                            Breakfast Oatmeal with Greek Yogurt & Seasonal fruits
                                            Mango Juice
                                            Lunch Multigrain roti, fish curry, vegetable salad
                                            Pre-Workout Snack Toast with Jam
                                            Dinner
                                            (Post-Workout) Broken wheat khichidi, carrot raita, egg white, and vegetable
                                            salad


                                            Day 3
                                            Breakfast Poached Eggs
                                            Whole Grain Toast
                                            Protein Shake
                                            Lunch Quinoa upma, chicken and broccoli salad
                                            Pre-Workout Snack Mixed Nuts & Dried Fruits
                                            Dinner
                                            (Post-Workout) Lean Beef and vegetable curry, brown rice, cucumber raita
                                            Baby Potatoes
                                            Chocolate Milk


                                            Day 4
                                            Breakfast Oatmeal with Honey
                                            Apple Juice
                                            Lunch Grilled Chicken
                                            Salad
                                            Whole Grain Bread
                                            Pre-Workout Snack Toast with Peanut Butter
                                            Dinner
                                            (Post-Workout) Methi Chicken
                                            Brown Rice
                                            Broccoli
                                            Protein Shake


                                            Day 5
                                            Breakfast Scrambled Egg
                                            Whole Grain Toast
                                            Smoothie
                                            Lunch Grilled chicken vegetable roti rolls
                                            Green Salad
                                            Pre-Workout Snack Mixed Nuts & Dried Fruits
                                            Dinner
                                            (Post-Workout) Chicken Stir Fry
                                            Spring Onion, Peppers & Broccoli
                                            Chocolate Milk


                                            Day 6
                                            Breakfast Oatmeal
                                            Whole Grain Toast
                                            Orange Juice
                                            Lunch Whole Grain Chicken Wrap
                                            Black Beans, Peppers & Greek Yogurt
                                            Pre-Workout Snack Apple with peanut butter
                                            Dinner
                                            (Post-Workout) Keema bhurji and multigrain rotiLean Beef Mince
                                            Sweet Potato
                                            Protein Shake


                                            Day 7
                                            Breakfast Oatmeal with Nuts
                                            Smoothie
                                            Lunch Whole wheat pasta with chicken and
                                            Green Salad
                                            Pre-Workout Snack Granola or Cereal
                                            Dinner
                                            (Post-Workout) Fish curry, boiled green peas salad
                                            Brown Rice
                                            Garden Peas
                                            Milk
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
                                    DAILY WORKOUT
                                </h6>
                                <img src={workout} onClick={() => {
                                    _showDailyWorkout(!showDailyWorkout)
                                }}/>
                                {
                                    showDailyWorkout && <div className="plan-features">
                                        <ul>
                                            <li>
                                                Day 1 – Chest
                                                <ul>
                                                    <li>
                                                        Flat bench barbell press –

                                                        4 sets of 8 – 12 reps
                                                    </li>
                                                    <li>

                                                        Incline dumbbell press – 4 sets of 8 – 12 reps
                                                    </li>
                                                </ul>
                                                Incline dumbbell flyes – 3 sets of 10 reps
                                                Cable crossovers – 3 sets of 15 reps
                                                Push-ups – 4 sets of 20 reps
                                            </li>
                                            <li>

                                                Day 2 – Shoulders

                                                Seated dumbbell shoulder press – 4 sets of 12 reps
                                                Standing barbell military press – 4 sets of 10 -12 reps
                                                Dumbbell lateral raises – 4 sets of 12 reps
                                                Rear deltoid flyes – 3 sets of 15 reps
                                                EZ bar upright rows – 4 sets of 15 reps
                                                Dumbbell front raises – 4 sets of 12 reps

                                            </li>
                                        </ul>
                                        <p>

                                            Day 3 – Legs

                                            Barbell squatBarbell squats – 4 sets of 8 – 10 reps
                                            Hack squats – 4 sets of 10 reps
                                            Leg press machine – 3 sets of 10 reps
                                            Leg extension machine – 3 sets of 10 reps
                                            Hamstring curls – 3 sets of 10 reps
                                            Calf raises – 3 sets of 20 reps

                                            Day 4 – Back and Abs

                                            Chin-ups – 4 sets of 10 reps
                                            Wide grip lat pull-downs – 4 sets of 12 reps
                                            Close grip lat pull-downs – 4 sets of 12 reps
                                            Barbell bent over rows – 4 sets of 8 reps
                                            Dumbbell rows – 4 sets of 8 – 10 reps per arm
                                            Hyperextensions – 4 sets to failure
                                            And also include an abs workout – see our abs exercises section here.

                                            Day 5 – Arms (biceps, triceps)

                                            Double arm dumbbell curls = 4 sets 10 – 12 reps
                                            EZ bar curls – 4 sets 10 reps
                                            Preacher curl machine – 4 sets of 12 reps
                                            Triceps rope pushdowns – 4 sets of 15 reps
                                            Overhead triceps rope extensions – 4 sets of 15 reps
                                            Skull crushers – 4 sets of 10 reps

                                            Days 6 and 7

                                            Here is where things get interesting, because in reality, there is no right
                                            or wrong exercise or muscle group for you to train on days 6 and 7, which is
                                            one of the reasons why these types of splits are considered so fun and so
                                            enjoyable.

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
                                    showPT && <div className="plan-features">
                                        <p>Reach Your Fitness Goals with Our Expert Coaches

                                            From getting more toned to losing a few extra pounds, it can be hard to achieve your fitness goals alone. That’s why our Doral personal trainers at GYMGUYZ Coral Gables will come directly to you, making it easier than ever for you to get moving again! We work with everyone from fitness novices to highly-trained athletes, and we take the time to get to know your exact needs and preferences before creating a customized fitness plan. Our mobility specialists can also help seniors and those with mobility impairments to find renewed balance, through gentle exercises designed to build strength over time.

                                            Because we’re flexible and bring the equipment to you, you don’t need to worry about fitting in time for a great workout. Whether you want to take a run in the park or at your office gym, our team at GYMGUYZ will show up for you, and cheer you on as you exceed your goals. Empowering and focused on the positive, our friendly personal trainers in Doral are passionate about helping you become healthier!

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
                                  MARTIAL ARTS
                                </h6>
                                <img src={ma} onClick={() => {
                                    _showMA(!showMA)
                                }}/>
                                {
                                    showMA && <div className="plan-features">
                                        <p>martial arts and self defence curriculum, beginning with Taekwondo, Weapons training and Muay Thai/Kickboxing, and later on incorporating Brazilian Jiu Jitsu classes and Mixed Martial Arts
                                            Take your body to the next level and reach fitness heights you didn’t know possible, all while learning traditional martial arts!

                                            Bullyproof your kids and provide them with essential life tools from martial arts training such as fitness, strength, focus, discipline and CONFIDENCE!

                                            World Class Instructors – Train with Champions, train like a Champion, BE A CHAMPION.

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