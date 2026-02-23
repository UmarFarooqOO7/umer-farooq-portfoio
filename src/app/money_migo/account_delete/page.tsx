import { Column, Flex, Heading, Text, Icon, Button } from "@/once-ui/components";
import { baseURL } from "@/app/resources";

export async function generateMetadata() {
  const title = "Request Account Deletion – Money Migo";
  const description =
    "Learn how to request the deletion of your Money Migo account and all associated data.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/money_migo/account_delete`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function AccountDelete() {
  const email = "umarfarooq12650@gmail.com";
  const subject = "Delete my Money Migo account";

  return (
    <Column maxWidth="s" gap="xl" paddingY="xl" horizontal="center">

      {/* Header */}
      <Column gap="m" fillWidth>
        <Heading variant="display-strong-l">Request Account Deletion</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Money Migo
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          If you want to delete your Money Migo account and all associated data, please
          follow the steps below.
        </Text>
      </Column>

      {/* Steps */}
      <Column gap="l" fillWidth>
        <Heading as="h2" variant="display-strong-s">
          Steps to Delete Your Account
        </Heading>

        <Column gap="m" fillWidth>
          {/* Step 1 */}
          <Flex
            gap="16"
            padding="l"
            border="neutral-medium"
            radius="m"
            background="neutral-alpha-weak"
            fillWidth
          >
            <Flex
              minWidth="32"
              height="32"
              radius="full"
              background="brand-medium"
              horizontal="center"
              vertical="center"
              style={{ flexShrink: 0 }}
            >
              <Text variant="label-strong-s" onBackground="brand-strong">
                1
              </Text>
            </Flex>
            <Column gap="8">
              <Text variant="body-strong-m">Send a deletion request email</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Send an email to{" "}
                <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>
                  {email}
                </a>{" "}
                with the subject line:
              </Text>
              <Flex
                padding="12"
                radius="s"
                background="neutral-strong"
                border="neutral-medium"
                fitWidth
              >
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {subject}
                </Text>
              </Flex>
            </Column>
          </Flex>

          {/* Step 2 */}
          <Flex
            gap="16"
            padding="l"
            border="neutral-medium"
            radius="m"
            background="neutral-alpha-weak"
            fillWidth
          >
            <Flex
              minWidth="32"
              height="32"
              radius="full"
              background="brand-medium"
              horizontal="center"
              vertical="center"
              style={{ flexShrink: 0 }}
            >
              <Text variant="label-strong-s" onBackground="brand-strong">
                2
              </Text>
            </Flex>
            <Column gap="8">
              <Text variant="body-strong-m">Include your account details</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Include your registered email address or username in the message body so
                we can identify your account.
              </Text>
            </Column>
          </Flex>
        </Column>

        {/* CTA Button */}
        <Button
          href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
          variant="primary"
          size="l"
          prefixIcon="email"
          fillWidth
        >
          Send Deletion Request
        </Button>
      </Column>

      {/* What Will Be Deleted */}
      <Column gap="m" fillWidth>
        <Heading as="h2" variant="display-strong-s">
          What Will Be Deleted
        </Heading>
        <Column gap="12" fillWidth>
          {[
            "All financial data, including transactions, accounts, registers, and categories.",
            "Shared register access will be removed.",
            "Any AI-processed insights related to your account will also be deleted.",
          ].map((item, index) => (
            <Flex key={index} gap="12" vertical="start">
              <Icon
                name="checkCircle"
                onBackground="danger-weak"
                size="m"
                style={{ flexShrink: 0, marginTop: "2px" }}
              />
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item}
              </Text>
            </Flex>
          ))}
        </Column>
      </Column>

      {/* What May Be Retained */}
      <Column gap="m" fillWidth>
        <Heading as="h2" variant="display-strong-s">
          What May Be Retained
        </Heading>
        <Column gap="12" fillWidth>
          {[
            "Anonymized analytics data may be retained for up to 6 months for performance monitoring.",
            "This data cannot be linked back to your account.",
          ].map((item, index) => (
            <Flex key={index} gap="12" vertical="start">
              <Icon
                name="infoCircle"
                onBackground="neutral-weak"
                size="m"
                style={{ flexShrink: 0, marginTop: "2px" }}
              />
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item}
              </Text>
            </Flex>
          ))}
        </Column>
      </Column>

      {/* Contact */}
      <Column
        gap="m"
        fillWidth
        padding="l"
        border="neutral-medium"
        radius="m"
        background="neutral-alpha-weak"
      >
        <Flex gap="8" vertical="center">
          <Icon name="email" onBackground="brand-weak" />
          <Heading as="h2" variant="heading-strong-l">
            Contact
          </Heading>
        </Flex>
        <Text variant="body-default-m" onBackground="neutral-weak">
          For questions or additional requests, email us at{" "}
          <a href={`mailto:${email}`}>{email}</a>.
        </Text>
      </Column>
    </Column>
  );
}
