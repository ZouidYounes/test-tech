/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Box, BoxContent, Button, Columns, ColumnsItem, Container, Link, RowItem, Rows, Section, Text, Title, TitleLevels } from "@trilogy-ds/react";
import Image from "next/image";
import OutlineBox from "./ui/OutlineBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { GapSize } from "@trilogy-ds/react/lib/components/columns/ColumnsTypes";





export default function Home() {

    return (
        <>
            {/* Container 1 - Dark Themed (using test-blue) */}
            <Section className="bg-test-blue text-white">
                <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                    <Columns className="w-full">
                        <ColumnsItem verticalCentered className="flex flex-col justify-center text-center md:text-left">
                            <Title>Réparati<span style={{ display: "inline-block", transform: "rotate(10deg)" }}>o</span>n de votre téléphone</Title>
                            <Text className="">Un smartphone cassé ou en panne, ça arrive à tout le monde.</Text>
                            <Text>Heureusement, que vous soyez sous garantie ou non, on a des solutions de réparation pour vous !</Text>
                        </ColumnsItem>
                        <ColumnsItem>
                            <Image alt="" src={"/image1.webp"} width={548} height={340} className="rounded-lg object-cover" />
                        </ColumnsItem>
                    </Columns>
                </Container>
            </Section>

            {/* Container 2 - Light Themed (using test-grey) */}
            <Section className="bg-test-grey text-test-blue">
                <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                    <Rows>
                        <RowItem className="text-center">
                            <Title>Le choix d’un partenaire expert pour votre téléphone</Title>
                        </RowItem>
                        <RowItem>
                            <Columns className="w-full">
                                <ColumnsItem>
                                    <Image alt="" src={"/image2.webp"} width={555} height={340} className="rounded-lg object-cover" />
                                </ColumnsItem>
                                <ColumnsItem verticalCentered className="flex flex-col justify-center">
                                    <Title level={4}>WeFix, filiale de Fnac Darty, est le leader français
                                        de la réparation de smartphones</Title>
                                    <Text>Quelle que soit la réparation, WeFix a la solution : écran, batterie,
                                        WiFi, haut-parleur, écouteurs, appareil photo, connecteur de charge, avec des pièces compatibles.</Text>
                                    <a href="https://www.wefix.com" target="_blank" rel="noopener noreferrer">
                                        <Text className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                            Visiter WeFix
                                        </Text>
                                    </a>
                                </ColumnsItem>

                            </Columns>
                        </RowItem>
                    </Rows>

                </Container>
            </Section>

            {/* Container 3 - Dark Themed (using test-blue) */}
            <Section className="bg-test-blue text-white">
                <Container className="flex justify-center items-center mx-auto max-w-screen-lg">
                    <Rows className="flex justify-center items-center container">
                        <RowItem className="flex justify-center items-center">
                            <Image
                                src="/icons/repair.svg"
                                alt="description of the SVG"
                                className="rounded-lg w-20 h-20"  // Make icon responsive with Tailwind classes
                                height={50}
                                width={50}
                            />
                        </RowItem>
                        <RowItem className="flex text-center">
                            <Title level={2}>
                                Bénéficiez du service de réparation express en boutique*
                            </Title>
                        </RowItem>
                        <RowItem className="flex text-center">
                            <Button variant="PRIMARY">Trouver ma boutique</Button>
                        </RowItem>
                        <RowItem className="my-4 w-full">
                            <OutlineBox title="Avec Bouygues Telecom, la réparation c’est…" className="mt-6 w-full flex flex-wrap">
                                <Swiper
                                    modules={[Pagination]}
                                    style={{ maxWidth: '100%' }}
                                    pagination={{ clickable: true }}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        640: { slidesPerView: 2 },   // 2 slides for tablets
                                        768: { slidesPerView: 2 },   // 2 slides for medium screens
                                        1024: { slidesPerView: 4 },  // 4 slides for desktops
                                    }}
                                    className="w-full swiper-container ml-0 pl-0 relative -top-5"  // Prevent overflow with `overflow-hidden`
                                    loop={true}  // Enables continuous scrolling
                                >
                                    {/* Slide 1 */}
                                    <SwiperSlide className="flex justify-center items-center w-full">
                                        <div className="flex justify-center items-center w-full">
                                            <div className="flex flex-col items-center w-full text-center break-words">
                                                <div>
                                                    <Image
                                                        src="/icons/users.svg"
                                                        alt="description of the SVG"
                                                        className="rounded-lg w-16 h-16 sm:w-14 sm:h-14 md:w-12 md:h-12"
                                                        height={50}
                                                        width={50}
                                                    />
                                                </div>
                                                <div>
                                                    <Title level={4}>Ouvert à tous</Title>
                                                </div>
                                                <div>
                                                    <Text>Que vous soyez client Bouygues Telecom ou non !</Text>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Slide 2 */}
                                    <SwiperSlide className="flex justify-center items-center w-full">
                                        <div className="flex justify-center items-center w-full">
                                            <div className="flex flex-col items-center w-full text-center break-words">
                                                <div>
                                                    <Image
                                                        src="/icons/france.svg"
                                                        alt="description of the SVG"
                                                        className="rounded-lg w-16 h-16 sm:w-14 sm:h-14 md:w-12 md:h-12"
                                                        height={50}
                                                        width={50}
                                                    />
                                                </div>
                                                <div>
                                                    <Title level={4}>Partout en France</Title>
                                                </div>
                                                <div>
                                                    <Text>Le service est accessible dans toutes nos boutiques</Text>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Slide 3 */}
                                    <SwiperSlide className="flex justify-center items-center w-full">
                                        <div className="flex justify-center items-center w-full">
                                            <div className="flex flex-col items-center w-full text-center break-words">
                                                <div>
                                                    <Image
                                                        src="/icons/calendar.svg"
                                                        alt="description of the SVG"
                                                        className="rounded-lg w-16 h-16 sm:w-14 sm:h-14 md:w-12 md:h-12"
                                                        height={50}
                                                        width={50}
                                                    />
                                                </div>
                                                <div>
                                                    <Title level={4}>Express</Title>
                                                </div>
                                                <div>
                                                    <Text>
                                                        Entre 1 et 5 jours, et pour près d’un client sur 2, la réparation est réalisée en 24h !
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Slide 4 */}
                                    <SwiperSlide className="flex justify-center items-center w-full">
                                        <div className="flex justify-center items-center w-full">
                                            <div className="flex flex-col items-center w-full text-center break-words">
                                                <div>
                                                    <Image
                                                        src="/icons/repair_green.svg"
                                                        alt="description of the SVG"
                                                        className="rounded-lg w-16 h-16 sm:w-14 sm:h-14 md:w-12 md:h-12"
                                                        height={50}
                                                        width={50}
                                                    />
                                                </div>
                                                <div>
                                                    <Title level={4}>Garantie de qualité</Title>
                                                </div>
                                                <div>
                                                    <Text>
                                                        Réparation réalisée par notre partenaire WiFix et garantie 1 an (i)
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </OutlineBox>

                        </RowItem>
                        <RowItem>
                            <Text>
                                * Retrouvez les conditions et informations détaillées du service de réparation dans la FAQ accessible en bas de page. Kit-mains libre recommandé.
                            </Text>
                        </RowItem>
                    </Rows>
                </Container>
            </Section>

            {/* Container 4 - Light Themed (using test-grey) */}
            <Section className="bg-test-grey text-test-blue">
                <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                    <Rows>
                        <RowItem className="text-center">
                            <Title>Et encore plus d’avantages si vous êtes client Bouygues Telecom !</Title>
                        </RowItem>
                        <RowItem>
                            <Columns multiline>
                                <ColumnsItem size={4}>
                                    <Box >
                                        <BoxContent>
                                            <Rows className=" flex items-center justify-center content-center text-center">
                                                <RowItem>
                                                    <Image
                                                        src="/icons/euro_sun.svg"
                                                        alt="description of the SVG"
                                                        className="rounded-lg w-16 h-16 "
                                                        height={50}
                                                        width={50}
                                                    />
                                                </RowItem>
                                                <RowItem>
                                                    <Title level={4}> -30% de remise* valables
                                                        sur toutes les réparations </Title>
                                                </RowItem>
                                                <RowItem>
                                                    <Text> et -20% de remise sur les autres réparations effectuées lors de la même prise en charge </Text>
                                                </RowItem>
                                            </Rows>
                                        </BoxContent>
                                    </Box>
                                </ColumnsItem>
                                <ColumnsItem size={4}>
                                    <Box >
                                        <BoxContent>
                                            <Rows className=" flex items-center justify-center content-center text-center">
                                                <RowItem>
                                                    <Image
                                                        src="/icons/phone.svg"
                                                        alt="description of the SVG"
                                                        className="rounded-lg w-16 h-16 "
                                                        height={50}
                                                        width={50}
                                                    />
                                                </RowItem>
                                                <RowItem>
                                                    <Title level={4}> On vous prête
                                                        un smartphone</Title>
                                                </RowItem>
                                                <RowItem>
                                                    <Text> le temps de la réparation (i) </Text>
                                                </RowItem>
                                            </Rows>
                                        </BoxContent>
                                    </Box>
                                </ColumnsItem>
                                <ColumnsItem size={4}>
                                    <Box backgroundColor="MAIN_FADE">
                                        <BoxContent>
                                            <Rows className=" flex items-center justify-center content-center text-center">
                                                <RowItem>
                                                    <Image
                                                        src="/icons/users_blue.svg"
                                                        alt="description of the SVG"
                                                        className="rounded-lg w-16 h-16"
                                                        height={50}
                                                        width={50}
                                                    />
                                                </RowItem>
                                                <RowItem>
                                                    <Title level={4}> Faites profiter de la remise
                                                        de 30% à un proche, </Title>
                                                </RowItem>
                                                <RowItem>
                                                    <Text> que le téléphone ait été acheté chez Bouygues Telecom ou ailleurs ! </Text>
                                                </RowItem>
                                            </Rows>
                                        </BoxContent>
                                    </Box>
                                </ColumnsItem>
                            </Columns>
                        </RowItem>
                    </Rows>

                </Container>
            </Section>

            {/* Container 5 - Dark Themed (using test-blue) */}
            <Section className="bg-test-dark text-test-blue">
                <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                    <Rows className=" flex items-center justify-center content-center text-center">
                        <RowItem className="text-center">
                            <Title>Nos forfaits, pour vous</Title>
                        </RowItem>
                        <RowItem>
                            <Columns multiline className="flex  justify-center text-center">
                                <ColumnsItem size={5} >
                                    <Box >
                                        <BoxContent>
                                            <Rows className=" flex items-center justify-center content-center text-center">
                                                <RowItem>
                                                    <div className="flex flex-row">
                                                        <Image
                                                            src="/icons/sim.svg"
                                                            alt="description of the SVG"
                                                            className="rounded-lg w-16 h-16 "
                                                            height={50}
                                                            width={50}
                                                        />
                                                        <Image
                                                            src="/icons/phone.svg"
                                                            alt="description of the SVG"
                                                            className="rounded-lg w-16 h-16 "
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </div>

                                                </RowItem>
                                                <RowItem>
                                                    <Title level={4}> Découvrir nos forfaits
                                                        Bouygues Telecom </Title>
                                                </RowItem>
                                                <RowItem>
                                                    <Text>Bénéficiez d’un réseau mobile de qualité,
                                                        d’avantages et de services exclusifs
                                                        et d&apos;un nouveau smartphone. </Text>
                                                </RowItem>
                                                <RowItem>
                                                    <Button variant="CONVERSION">En profiter</Button>
                                                </RowItem>
                                            </Rows>
                                        </BoxContent>
                                    </Box>
                                </ColumnsItem>
                                <ColumnsItem size={5}>
                                    <Box >
                                        <BoxContent>
                                            <Rows className=" flex items-center justify-center content-center text-center">
                                                <RowItem>
                                                    <Image
                                                        src="/icons/sim.svg"
                                                        alt="description of the SVG"
                                                        className="rounded-lg w-16 h-16 "
                                                        height={50}
                                                        width={50}
                                                    />
                                                </RowItem>
                                                <RowItem>
                                                    <Title level={4}> Découvrir nos forfaits
                                                        B&YOU sans engagement</Title>
                                                </RowItem>
                                                <RowItem>
                                                    <Text> Profitez de la qualité de notre réseau
                                                        avec nos forfaits B&YOU sans engagement.
                                                    </Text>
                                                </RowItem>
                                                <RowItem>
                                                    <Button variant="CONVERSION">En profiter</Button>
                                                </RowItem>
                                            </Rows>
                                        </BoxContent>
                                    </Box>
                                </ColumnsItem>
                            </Columns>
                        </RowItem>
                    </Rows>

                </Container>
            </Section>

            {/* Container 6 - Light Themed (using test-grey) */}
            <Section className="bg-test-ligh-blue text-white">
                <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                    <Rows className=" flex items-center justify-center content-center text-center">
                        <RowItem className="text-center">
                            <Title>Quel que soit le problème, nous avons la solution</Title>
                        </RowItem>
                        <RowItem>
                            <Columns multiline className="flex text-left justify-center text-test-blue">
                                <ColumnsItem size={6} >
                                    <Box >
                                        <BoxContent>
                                            <Rows>
                                                <RowItem>
                                                    <Image
                                                        src="/icons/phone_broken.svg"
                                                        alt="description of the SVG"
                                                        className="rounded-lg w-16 h-16 "
                                                        height={50}
                                                        width={50}
                                                    />
                                                </RowItem>
                                                <RowItem>
                                                    <Title level={4}> Mon téléphone n’est plus sous garantie</Title>
                                                </RowItem>
                                                <RowItem>
                                                    <Text>Si le téléphone que nous vous avons vendu n’est plus garanti et n’est pas assuré ou si vous n’avez pas acheté votre téléphone chez nous,
                                                        vous pouvez bénéficier d’une <span className="font-bold">réparation en boutique</span>, et <span className="font-bold">à prix réduit</span> si vous détenez un forfait Bouygues Telecom. </Text>
                                                </RowItem>
                                                <RowItem>
                                                    <Link>
                                                        Trouver ma boutique
                                                    </Link>
                                                </RowItem>
                                            </Rows>
                                        </BoxContent>
                                    </Box>
                                </ColumnsItem>
                                <ColumnsItem size={6}>
                                    <Box >
                                        <BoxContent>
                                            <Rows>
                                                <RowItem>
                                                    <Image
                                                        src="/icons/hand_phone.svg"
                                                        alt="description of the SVG"
                                                        className="rounded-lg w-16 h-16 "
                                                        height={50}
                                                        width={50}
                                                    />
                                                </RowItem>
                                                <RowItem>
                                                    <Title level={4}> Mon téléphone est sous garantie</Title>
                                                </RowItem>
                                                <RowItem>
                                                    <Text> <Link>Tous nos téléphones</Link> sont <span className="font-bold">garantis 2 ans</span>. Si vos téléphone tombe
                                                        en panne pendant ce délais et qu’il s’agit d’un défaut couvert
                                                        par les garanties légales (par exemple, un défaut de fabrication),
                                                        <span className="font-bold"> sa réparation est prise en charge gratuitement</span> par Bouygues Telecom.
                                                    </Text>
                                                </RowItem>
                                            </Rows>
                                        </BoxContent>
                                    </Box>
                                </ColumnsItem>
                            </Columns>
                        </RowItem>
                    </Rows>
                </Container>
            </Section>

            {/* Container 7 - Dark Themed (using test-blue) */}
            <Section className="bg-test-grey text-test-blue">
                <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                    <Rows className=" flex items-center justify-center content-center text-center">
                        <RowItem className="text-center">
                            <Title>L’assurance, la formule tout confort pour votre mobile</Title>
                        </RowItem>
                        <RowItem>
                            <Columns multiline className="flex text-left justify-center text-test-blue">
                                <ColumnsItem size={6}>
                                    <Image alt="" src={"/image3.webp"} width={676} height={324} className="hidden md:block rounded-lg object-cover" />
                                </ColumnsItem>
                                <ColumnsItem size={6} className="h-auto">
                                    <Rows>
                                        <RowItem>
                                            <Box >
                                                <BoxContent>
                                                    <Rows gapless className="w-auto">
                                                        <RowItem>
                                                            <Image
                                                                src="/icons/euro_sun.svg"
                                                                alt="description of the SVG"
                                                                className="rounded-lg w-16 h-16 "
                                                                height={50}
                                                                width={50}
                                                            />
                                                        </RowItem>
                                                        <RowItem>
                                                            <Title level={4}>Aucune dépense</Title>
                                                        </RowItem>
                                                        <RowItem>
                                                            <Text>  à débourser en cas d’incident
                                                            </Text>
                                                        </RowItem>
                                                    </Rows>
                                                </BoxContent>
                                            </Box>
                                        </RowItem>
                                        <RowItem>
                                            <Box >
                                                <BoxContent>
                                                    <Rows gapless>
                                                        <RowItem>
                                                            <Image
                                                                src="/icons/hand_phone.svg"
                                                                alt="description of the SVG"
                                                                className="rounded-lg w-16 h-16 "
                                                                height={50}
                                                                width={50}
                                                            />
                                                        </RowItem>
                                                        <RowItem>
                                                            <Title level={4}>Téléphone assuré</Title>
                                                        </RowItem>
                                                        <RowItem>
                                                            <Text> en cas de vol, dommages ou oxydation
                                                            </Text>
                                                        </RowItem>
                                                    </Rows>
                                                </BoxContent>
                                            </Box>
                                        </RowItem>
                                    </Rows>


                                </ColumnsItem>
                            </Columns>
                        </RowItem>
                        <RowItem>
                            <Button variant="PRIMARY">L&apos;assurence en détail</Button>
                        </RowItem>
                    </Rows>
                </Container>
            </Section>

            <Section className="bg-test-blue text-white">
                <Container className="flex justify-center items-center mx-auto max-w-screen-lg">
                    <Rows className="flex justify-center items-center container text-center">
                        <RowItem className="flex justify-center items-center">
                            <Image
                                src="/icons/phone_recycle.svg"
                                alt="description of the SVG"
                                className="rounded-lg w-20 h-20"  // Make icon responsive with Tailwind classes
                                height={50}
                                width={50}
                            />
                        </RowItem>
                        <RowItem className="flex text-center">
                            <Title className="md:mx-40" level={2}>
                                Réparer son téléphone, c’est aussi un geste
                                pour l’environnement
                            </Title>
                        </RowItem>
                        <RowItem className="flex text-center">
                            <Title className="md:mx-40" level={3}>
                                Prolonger la durée de vie d’un an d’un téléphone permettrait
                                de réduire son empreinte carbone de 30% environ*
                            </Title>
                        </RowItem>
                        <RowItem className="my-4 w-full">
                            <OutlineBox title="Comment?" className="mt-6 w-full flex flex-wrap pt-8 pb-8">
                                <Columns gap={GapSize.TEN}>
                                    <ColumnsItem className="md:mx-32">
                                        <Rows className="flex justify-center items-center w-full">
                                            <RowItem>
                                                <Image
                                                    src="/icons/phone_up_down.svg"
                                                    alt="description of the SVG"
                                                    className="rounded-lg w-16 h-16  "
                                                    height={50}
                                                    width={50}
                                                />
                                            </RowItem>
                                            <RowItem>
                                                <Title level={4}>Environnement</Title>
                                            </RowItem>
                                            <RowItem>
                                                <Text>En évitant la production d’un nouveau mobile
                                                    et ses conséquences sur l’environnement.</Text>
                                            </RowItem>

                                        </Rows>
                                    </ColumnsItem>
                                    <ColumnsItem className="md:mx-32">
                                        <Rows className="flex justify-center items-center w-full">
                                            <RowItem>
                                                <Image
                                                    src="/icons/recycle.svg"
                                                    alt="description of the SVG"
                                                    className="rounded-lg w-16 h-16"
                                                    height={50}
                                                    width={50}
                                                />
                                            </RowItem>
                                            <RowItem>
                                                <Title level={4}>Recyclage</Title>
                                            </RowItem>
                                            <RowItem>
                                                <Text>En permettant le recyclage des pièces changées
                                                    suite à la réparation de votre téléphone.</Text>
                                            </RowItem>
                                        </Rows>

                                    </ColumnsItem>
                                </Columns>




                            </OutlineBox>

                        </RowItem>
                        <RowItem>
                            <Text>
                                *Source : Green Alliance
                            </Text>
                        </RowItem>
                    </Rows>
                </Container>
            </Section>
            <Section className="bg-test-grey text-test-blue">
                <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                    <Rows className=" flex items-center justify-center content-center text-center">
                        <RowItem className="text-center">
                            <Title>Ensemble, faisons durer nos smartphones plus longtemps</Title>
                        </RowItem>
                        <RowItem>
                            <Box>
                                <Columns multiline className="flex text-left justify-center">
                                    <ColumnsItem size={5} className="px-12 md:p-16">
                                        <Image alt="" src={"/logo_recycle.webp"} width={676} height={324} className="rounded-lg object-cover" />

                                    </ColumnsItem>
                                    <ColumnsItem size={7} className="h-auto">
                                        <Rows >
                                            <RowItem>
                                                <Title level={4}> Nos téléphones ont une place particulière dans notre quotidien, en nous accompagnant partout et tout le temps</Title>
                                            </RowItem>
                                            <RowItem>
                                                <Text> Alors pour s’en séparer le plus tard possible, on lance
                                                    <span className="font-bold"> les Solutions Smartphone Durable</span>
                                                    : 4 façons de prolonger la vie de nos mobiles tout en faisant un geste pour la planète.
                                                </Text>
                                            </RowItem>
                                            <RowItem>
                                                <Link>Découvrir nos solutions</Link>
                                            </RowItem>
                                        </Rows>


                                    </ColumnsItem>
                                </Columns>
                            </Box>
                        </RowItem>
                    </Rows>
                </Container>
            </Section>
            <Section className="bg-white text-test-blue">
                <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                    <Columns multiline >
                        <ColumnsItem size={6}>
                            <Title className="text-center md:text-left text-base md:text-xl">
                                Toutes vos questions sur la réparation de téléphone
                            </Title>
                        </ColumnsItem>
                        <ColumnsItem size={6}>
                            <Accordion className="bg-test-grey">
                                <AccordionItem>
                                    <AccordionHeader>
                                        <Text> Comment faire réparer son téléphone chez Bouygues Telecom ? </Text>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <Text> Lorem ipsum dolor sit amet lorem </Text>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader>
                                        <Text> Quels types de réparations propose le service ? </Text>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <Text> Lorem ipsum dolor sit amet </Text>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader>
                                        <Text> Combien de temps prendra la réparation de mon téléphone ? </Text>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <Text> Collpased by default </Text>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader>
                                        <Text> La réparation est-elle garantie ? </Text>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <Text> Lorem ipsum dolor sit amet </Text>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader>
                                        <Text> Quels sont mes avantages si je fais réparer mon téléphone
                                            chez Bouygues Telecom ? </Text>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <Text> Lorem ipsum dolor sit amet </Text>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader>
                                        <Text> Quelles marques de téléphones sont réparables ? </Text>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <Text> Lorem ipsum dolor sit amet </Text>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader>
                                        <Text> Comment faire réparer mon téléphone tout en préservant la garantie ? </Text>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <Text> Lorem ipsum dolor sit amet </Text>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </ColumnsItem>
                    </Columns>
                </Container>
            </Section>
            <Section className="bg-test-grey text-test-blue">
                <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                    <Rows className="flex justify-center items-center container">
                        <RowItem className="text-center">
                            <Title>Nos astuces pour prendre soin de votre mobile</Title>
                        </RowItem>
                        <RowItem className="my-4 w-full">
                            <Container className="md:p-6 md:pt-10 mt-6 w-full flex flex-wrap">
                                <Swiper
                                    modules={[Pagination]}
                                    pagination={{ clickable: true }}
                                    spaceBetween={5}
                                    slidesPerView={1}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        640: { slidesPerView: 2 },   // 2 slides for tablets
                                        768: { slidesPerView: 2 },   // 2 slides for medium screens
                                        1024: { slidesPerView: 3 },  // 4 slides for desktops
                                    }}
                                    className="w-full swiper-container"  // Prevent overflow with `overflow-hidden`
                                    loop={true}  // Enables continuous scrolling
                                >
                                    <SwiperSlide className="flex justify-center items-center w-full">
                                        <Box className="px-0">
                                            <BoxContent className="px-0">
                                                <Rows className=" flex ">
                                                    <RowItem >
                                                        <Image alt="" src={"/image4.webp"} width={676} height={324} className="rounded-lg object-cover w-full h-full" />

                                                    </RowItem>
                                                    <RowItem>
                                                        <Title level={TitleLevels.SIX}> Comment prolonger la vie de son smartphone ? </Title>
                                                    </RowItem>
                                                    <RowItem>
                                                        <Link> Visiter WeFix </Link>
                                                    </RowItem>
                                                </Rows>
                                            </BoxContent>
                                        </Box>
                                    </SwiperSlide>

                                    <SwiperSlide className="flex justify-center items-center w-full">
                                        <Box className="px-0">
                                            <BoxContent className="px-0">
                                                <Rows className=" flex ">
                                                    <RowItem >
                                                        <Image alt="" src={"/image5.webp"} width={676} height={324} className="rounded-lg object-cover w-full h-full" />

                                                    </RowItem>
                                                    <RowItem>
                                                        <Title level={TitleLevels.SIX}> Comment protéger son smartphone de l’oxydation ? </Title>
                                                    </RowItem>
                                                    <RowItem>
                                                        <Link> Visiter WeFix </Link>
                                                    </RowItem>
                                                </Rows>
                                            </BoxContent>
                                        </Box>
                                    </SwiperSlide>
                                    <SwiperSlide className="flex justify-center items-center w-full">

                                        <Box className="px-0">
                                            <BoxContent className="px-0">
                                                <Rows className=" flex ">
                                                    <RowItem className="m-0">
                                                        <Image alt="" src={"/image6.webp"} width={676} height={324} className="rounded-lg object-cover w-full h-full" />

                                                    </RowItem>
                                                    <RowItem>
                                                        <Title level={TitleLevels.SIX}> Les conseils à suivre avant d’envoyer votre téléphone en réparation </Title>
                                                    </RowItem>
                                                    <RowItem>
                                                        <Link> Visiter WeFix </Link>
                                                    </RowItem>
                                                </Rows>
                                            </BoxContent>
                                        </Box>
                                    </SwiperSlide>


                                </Swiper>
                            </Container>


                        </RowItem>
                    </Rows>

                </Container>
            </Section>
        </>
    );
}
