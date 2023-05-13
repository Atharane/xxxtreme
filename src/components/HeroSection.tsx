import {
  createStyles,
  Container,
  Title,
  Text,
  rem,
} from "@mantine/core"

const useStyles = createStyles(theme => ({
  root: {
    backgroundSize: "cover",
    backgroundPosition: "start",
    backgroundImage:
      "linear-gradient(229deg, rgba(254,249,246,0.75) 35%, rgba(255,255,255,1) 100%), url(https://www.megatube.xxx/get_image/10/ecc66bb07261fddecb2107e2a0c871f9/sources/26000/26237/4913824.jpg/*)",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    color: "#11111",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    fontFamily: "Boska, serif",
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}))

export default function HeroSection() {
  const { classes } = useStyles()
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Delve into the Sensual Abyss
              {/* <Text component="span" inherit color="#fde484">
                &nbsp;✦
              </Text> */}
              &nbsp;✦
              <Text component="span" inherit color="#fde484">
                &nbsp;✦
              </Text>{" "}
              a realm of pure pleasure
            </Title>

            <Text className={classes.description} mt={30}>
              A realm where artistic expression intertwines with the
              intoxicating allure of human desire, where every frame and
              composition is meticulously curated to ignite the senses. Transcend
              into a sanctuary of elegance and sophistication, where the pursuit
              of pleasure is elevated to an art form. Indulge
              in an exquisite journey that captivates your senses, as we redefine
              the boundaries of sensuality with grace and sophistication.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  )
}
