import {
  createStyles,
  Box,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

const HEADER_HEIGHT = rem(60)

const useStyles = createStyles(theme => ({
  root: {
    height: HEADER_HEIGHT,
    backgroundColor: "transparent",
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.95 )",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    all: "unset",
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}))

const links: {
  label: string
  link: string
}[] = [
  { label: "xxxtreme", link: "/" },
  { label: "pornstars", link: "/about" },
  { label: "about", link: "/contact" },
]

export default function NavigationBar() {
  const [opened, { toggle, close }] = useDisclosure(false)
  const { classes} = useStyles()

  const items = links.map(link => (
    <button
      key={link.label}
      className={classes.link}
      onClick={event => {
        event.preventDefault()
        close()
      }}
    >
      {link.label}
    </button>
  ))

  return (
    <Box className={classes.root}>
      <Container className={classes.header}>
        <span>xxxtreme by @Atharva</span>
        <Group spacing={5} className={classes.links}>
          {items}
          <button
            className={classes.link}
            style={{
              border: "1px solid #111111",
            }}
          >
            Sign up
          </button>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {styles => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <button className={classes.link}>Sign up</button>
            </Paper>
          )}
        </Transition>
      </Container>
    </Box>
  )
}
