import { createStyles, Paper, Title, Box, rem, Grid } from "@mantine/core"

import { Link } from "react-router-dom"

const useStyles = createStyles(theme => ({
  card: {
    height: rem(130),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontWeight: 400,
    lineHeight: 1.2,
    fontSize: rem(14),
    marginTop: theme.spacing.xs,
    minHeight: rem(50),
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : "#555352",
  },

  stripe: {
    height: "1px",
    margin: "2px 0",
    background: "#9e9a97",
  },
}))

interface CardProps {
  image: string
  title: string
  category: string
}

function Card({ image, title }: CardProps) {
  const { classes } = useStyles()

  return (
    <Box mb="20">
      <Paper
        shadow="md"
        p="xl"
        radius={0}
        sx={{
          backgroundImage: `linear-gradient(228deg, rgba(29,29,29,0.5) 27%, rgba(105,105,105,0.6) 100%), url(${image})`,
        }}
        className={classes.card}
      />
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>

        <div className={classes.stripe} />
        <div className={classes.stripe} />
      </div>
    </Box>
  )
}

const data = [
  {
    image: "alba-lala.webp",
    title: "Best forests to visit in North America",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Hawaii beaches review: better than you think",
    category: "beach",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Mountains at night: 12 best locations to enjoy the view",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Aurora in Norway: when to visit for best experience",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Best places to visit this winter",
    category: "tourism",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Active volcanos reviews: travel at your own risk",
    category: "nature",
  },
]

export default function CardsGrid() {
  const slides = data.map(item => (
    <Grid.Col md={6} lg={2}>
      <Link to="/videos/1">
        <Card {...item} />
      </Link>
    </Grid.Col>
  ))

  return (
    <Grid
      style={{
        margin: 10,
      }}
    >
      {slides}
    </Grid>
  )
}
