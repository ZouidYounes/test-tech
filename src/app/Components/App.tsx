"use client"
import { Button, Columns, ColumnsItem, Container, RowItem, Rows, Section, Text, Title } from "@trilogy-ds/react";
import Image from "next/image";
import OutlineBox from "./ui/OutlineBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";





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
                                className="rounded-lg w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20"  // Make icon responsive with Tailwind classes
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
            <Section className="bg-test-grey text-black">
                <Container>
                    <Text>Container 4</Text>
                    <Text>This is another light-themed container from Trilogy!</Text>
                </Container>
            </Section>

            {/* Container 5 - Dark Themed (using test-blue) */}
            <Section className="bg-test-blue text-white">
                <Container>
                    <Text>Container 5</Text>
                    <Text>This is yet another dark-themed container from Trilogy!</Text>
                </Container>
            </Section>

            {/* Container 6 - Light Themed (using test-grey) */}
            <Section className="bg-test-grey text-black">
                <Container>
                    <Text>Container 6</Text>
                    <Text>This is yet another light-themed container from Trilogy!</Text>
                </Container>
            </Section>

            {/* Container 7 - Dark Themed (using test-blue) */}
            <Section className="bg-test-blue text-white">
                <Container>
                    <Text>Container 7</Text>
                    <Text>Final dark-themed container from Trilogy!</Text>
                </Container>
            </Section>
        </>
    );
}
