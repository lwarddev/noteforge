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

interface PasswordResetEmailProps {
  userEmail: string;
  resetUrl: string;
  userName: string;
}

const PasswordResetEmail = ({
  userEmail,
  resetUrl,
  userName,
}: PasswordResetEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Reset your password - secure link expires in 1 hour</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section>
              <Heading className="text-[32px] font-bold text-gray-900 text-center mb-[32px] mt-0">
                Reset Your Password
              </Heading>
            </Section>

            {/* Main Content */}
            <Section>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Hi {userName},
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                We received a request to reset the password for your account
                associated with <strong>{userEmail}</strong>.
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[32px]">
                Click the button below to create a new password. This link is
                secure and will expire in 1 hour for your protection.
              </Text>

              {/* Reset Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={resetUrl}
                  className="bg-red-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
                >
                  Reset My Password
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[24px]">
                If the button above doesn't work, copy and paste this link into
                your browser:
              </Text>

              <Text className="text-[14px] text-blue-600 break-all mb-[32px]">
                <Link href={resetUrl} className="text-blue-600 underline">
                  {resetUrl}
                </Link>
              </Text>

              {/* Security Notice */}
              <Section className="bg-yellow-50 border-l-[4px] border-yellow-400 p-[16px] mb-[32px]">
                <Text className="text-[14px] text-yellow-800 leading-[20px] mb-[8px] font-semibold">
                  🔒 Security Notice
                </Text>
                <Text className="text-[14px] text-yellow-700 leading-[20px] m-0">
                  If you didn't request this password reset, please ignore this
                  email. Your account remains secure and no changes have been
                  made.
                </Text>
              </Section>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[24px]">
                For your security, this password reset link will expire in 1
                hour. If you need to reset your password after this time, please
                request a new reset link.
              </Text>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[24px]">
                If you're having trouble accessing your account or need
                additional help, please contact our support team.
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[8px]">
                Best regards,
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px]">
                The Security Team
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
                  Contact Support
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

export default PasswordResetEmail;
