import React from "react";
import { Link } from "gatsby";
import { Button, Colors, Img } from "../Styling";
import { Grid, Div } from "../Sections";
import { H4, H3, H2, H1, Paragraph } from "../Heading";
import Icon from "../Icon";

const CardsCarousel = ({
  lang,
  landingTemplate,
  title,
  cardWidth,
  sub_title,
  content,
  button,
  cards,
}) => {
  if (!Array.isArray(cardWidth)) cardWidth = [cardWidth || "250px"];
  if (cardWidth.length > 0) {
    let lastValue = cardWidth[cardWidth.length - 1];
    for (let i = 0; i < 4 - cardWidth.length; i++) {
      cardWidth.push(lastValue);
    }
  }

  const newWidth = "30%";

  return (
    <>
      <Div
        display="flex"
        flexDirection="column"
        gap="10px"
        margin="60px 10% 30px 10%"
        maxWidth_tablet="1366px"
        margin_md="60px auto 20px auto"
        padding_tablet="0px"
        padding_xs="10px 0 0 0"
      >
        {title && (
          <H2
            margin="0 0 10px 0"
            fontWeight="700"
            fontSize={title.font_size[0]}
            lineHeight="36px"
          >
            {title.text}
          </H2>
        )}

        {sub_title && /<\/?[a-z0-9]+>/g.test(sub_title.text) ? (
          <Paragraph
            margin="0 0 10px 0"
            fontSize={sub_title.font_size[0]}
            dangerouslySetInnerHTML={{ __html: sub_title.text }}
          />
        ) : (
          sub_title && (
            <Paragraph margin="0 0 10px 0" fontSize={sub_title.font_size[0]}>
              {sub_title.text}
            </Paragraph>
          )
        )}
      </Div>
      <Div
        width_xs="90%"
        width_md="100%"
        className="badge-slider hideOverflowX__"
        flexDirection="row"
        marginTablet="97px 0"
        justifyContent_tablet={cards.length < 3 ? "center" : "flex-start"}
        justifyContent_md={cards.length > 3 ? "flex-start" : "center"}
        justifyContent_lg="center"
        maxWidth_tablet="1530px"
        margin="auto"
        padding="20px 30px;"
      >
        {cards.map((card, index) => (
          <Div
            key={index}
            flexDirection="column"
            // height={card.button ? "auto" : "fit-content"}
            height="auto"
            width_xxs={`${cardWidth[1]}`}
            width_sm={`${cardWidth[1]}`}
            width_md={newWidth}
            width_lg={newWidth}
            border="2px solid #d5d5d5"
            margin="0 12px"
            //margin={card.button ? "0 12px" : "0 12px 24px 12px"}
            background={Colors.white}
            borderRadius="15px"
            boxShadow="12px 12px 8px 0px rgba(204,204,204,0.3)"
          >
            <Img
              src={card.image.src}
              height="266px"
              borderRadius="12px 12px 0 0"
            />
            <Div>
              <H1
                textTransform="uppercase"
                fontSize={card.heading.font_size}
                fontWeight="900"
                lineHeight="19px"
                padding="24px 5px 12px 5px"
                borderRadius="12px 12px 0px 0px"
                style={
                  card.heading.style ? JSON.parse(card.heading.style) : null
                }
              >
                {card.heading.text}
              </H1>
            </Div>

            {card.content && (
              <Div
                justifyContent="center"
                alignItems="center"
                style={
                  card.content.style ? JSON.parse(card.content.style) : null
                }
              >
                {card.content.text}
              </Div>
            )}

            <Div
              padding={card.button ? "12px 0" : "12px 0 0 0"}
              //height="62px"
              justifyContent="center"
              alignItems="center"
              height={card.button ? "62px" : "0px"}
            >
              {card.button && (
                <>
                  <Link to={card.button.link}>
                    <H3
                      margin="12px 10px 12px 0"
                      textTransform="uppercase"
                      fontSize="16px"
                      fontWeight="700"
                      lineHeight="19px"
                    >
                      {card.button.text}
                    </H3>
                  </Link>
                  <Link to={card.button.link}>
                    <Icon
                      icon="arrow-right"
                      width="15px"
                      height="12px"
                      //padding="0 0 0 5px"
                    />
                  </Link>
                </>
              )}
            </Div>
          </Div>
        ))}
      </Div>

      {content && /<\/?[a-z0-9]+>/g.test(content.text) ? (
        <Paragraph
          padding="0 32px"
          margin="30px 0 0 0"
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      ) : (
        content && (
          <Paragraph padding="0 32px" margin="30px 0 0 0">
            {content.text}
          </Paragraph>
        )
      )}
      <Div padding="0 0 30px 0" justifyContent="center">
        {button && (
          <Button
            outline
            // width="250px"
            colorHoverText={button.hover_color || Colors.blue}
            lineHeight="26px"
            textColor={Colors[button.color] || button.color}
            color={Colors[button.color] || button.color}
            // padding_tablet="0"
            fontSize="15px"
            style={button.style ? JSON.parse(button.style) : null}
            background={Colors[button.background] || button.background}
            // textAlign="left"
            margin="24px 0 30px 0"
            padding=".35rem.85rem"
            onClick={() => {
              if (button.path && button.path.indexOf("http") > -1)
                window.open(transferQuerystrings(button.path, utm));
              else navigate(button.path);
            }}
          >
            {button.text}
          </Button>
        )}
      </Div>
    </>
  );
};
export default CardsCarousel;
