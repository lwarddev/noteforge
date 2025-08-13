import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface VerificationEmailProps {
  userName: string;
  verificationUrl: string;
}

const VerificationEmail = ({
  userName,
  verificationUrl,
}: VerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>
          Verify your email address to complete your account setup
        </Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section>
              <Heading className="text-[32px] font-bold text-gray-900 text-center mb-[32px] mt-0">
                Verify Your Email Address
              </Heading>
            </Section>

            {/* Main Content */}
            <Section>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Hi there,
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Thanks for signing up! To complete your account setup and start
                using our platform, please verify your email address by clicking
                the button below.
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[32px]">
                We sent this verification email to: <strong>{userName}</strong>
              </Text>

              {/* Verification Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={verificationUrl}
                  className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
                >
                  Verify Email Address
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[24px]">
                If the button above doesn't work, you can also copy and paste
                the following link into your browser:
              </Text>

              <Text className="text-[14px] text-blue-600 break-all mb-[32px]">
                <Link
                  href={verificationUrl}
                  className="text-blue-600 underline"
                >
                  {verificationUrl}
                </Link>
              </Text>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[24px]">
                This verification link will expire in 24 hours for security
                purposes. If you didn't create an account with us, you can
                safely ignore this email.
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[8px]">
                Best regards,
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px]">
                The Team
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[32px] mt-[40px]">
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center m-0 mb-[8px]">
                © 2025 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center m-0 mb-[8px]">
                123 Business Street, Derby, England DE1 2AB
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center m-0">
                <Link href="#" className="text-gray-500 underline">
                  Unsubscribe
                </Link>
                {" | "}
                <Link href="#" className="text-gray-500 underline">
                  Privacy Policy
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
