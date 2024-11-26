import { Button, Columns, ColumnsItem, Container, RowItem, Rows, Section, Text, Title } from "@trilogy-ds/react";
import Image from "next/image";



export default function Home() {
    return (
        <>
            {/* Container 1 - Dark Themed (using test-blue) */}
            <Section className="bg-test-blue text-white">
                <Container className=" flex justify-center items-center mx-auto max-w-screen-lg md:px-40 px-6" >
                    <Columns className="w-full">
                        <ColumnsItem verticalCentered className="flex flex-col justify-center text-center md:text-left ">
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
                <Container className=" flex justify-center items-center mx-auto max-w-screen-lg md:px-40 px-6" >
                    <Rows>
                        <RowItem className=" text-center">
                            <Title>Le choix d’un partenaire expert pour votre téléphone</Title>
                        </RowItem>
                        <RowItem>
                            <Columns className="w-full">
                                <ColumnsItem>
                                    <Image alt="" src={"/image2.webp"} width={555} height={340} className="rounded-lg object-cover" />
                                </ColumnsItem>
                                <ColumnsItem verticalCentered className="flex flex-col justify-center ">
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
                <Container className=" flex justify-center items-center mx-auto max-w-screen-lg md:px-40 px-6" >
                    <Rows className="flex justify-center items-center content-center">
                        <RowItem>
                            <Image src="/icons/repair.svg" alt="description of the SVG" className="rounded-lg justify-center" height={50} width={50} />
                        </RowItem>
                        <RowItem className="flex text-center">
                            <Title level={2}>Bénéficiez du service
                                de réparation express en boutique*</Title>                        
                        </RowItem>
                        <RowItem className="flex text-center">
                            <Button variant="PRIMARY">Trouver ma boutique</Button>                        
                        </RowItem>
                        {/* <RowItem>
                            <Columns className="w-full">

                                <ColumnsItem verticalCentered className="flex flex-col justify-center ">

                                    <Text>Quelle que soit la réparation, WeFix a la solution : écran, batterie,
                                        WiFi, haut-parleur, écouteurs, appareil photo, connecteur de charge, avec des pièces compatibles.</Text>
                                    <a href="https://www.wefix.com" target="_blank" rel="noopener noreferrer">
                                        <Text className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                            Visiter WeFix
                                        </Text>
                                    </a>
                                </ColumnsItem>

                            </Columns>
                        </RowItem> */}
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
