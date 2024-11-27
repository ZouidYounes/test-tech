import { Container, Title } from "@trilogy-ds/react";

// Register Swiper modules

interface OutlineBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  backgroundLight?: boolean;
}

const OutlineBox: React.FC<OutlineBoxProps> = ({ title, children, className, backgroundLight }) => {
  return (
    <Container
      className={`relative border-2 ${backgroundLight ? "border-test-blue" : "border-test-grey"} p-6 rounded-lg ${className}`}
    >
      {/* Title breaking the outline */}
      <Title
        level={4}
        className={`absolute -top-8 left-1/2 transform -translate-x-1/2 ${backgroundLight ? "bg-test-grey" : "bg-test-blue"} px-4 text-lg font-semibold`}
      >
        {title}
      </Title>

      {/* Swiper inside the box */}
      <Container className="mt-20">
          {children}
      </Container>
    </Container>
  );
};

export default OutlineBox;
