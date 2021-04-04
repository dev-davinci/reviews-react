import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import people from "./../../data";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  media: {
    height: 100,
    width: 100,
    borderRadius: "50%",
  },
}));

const Review = () => {
  const classes = useStyles();

  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      console.log(newIndex);

      return checkNumber(newIndex);
    });
  };
  return (
    <Box my={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <Box my={3}>
            <CardMedia
              className={classes.media}
              image={image}
              title={name}
              style={{ margin: "auto" }}
            />
          </Box>
          <CardContent style={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h4" component="h1">
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              color="secondary"
            >
              {job}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="secondary">
            <FaChevronLeft onClick={prevPerson} />
          </Button>
          <Button color="secondary">
            <FaChevronRight onClick={nextPerson} />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Review;
