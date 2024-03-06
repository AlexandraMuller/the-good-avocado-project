import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewsCard from "./NewsCard";
import "./NewsCardList.css";

function NewsCardList(props) {
  const { newsList } = props;

  return (
    <Container className="NewsCardList">
      <Row>
        {newsList.map((news) => {
          return (
            <Col xs={12} md={6} lg={4} className="mb-4" key={news.id}>
              {" "}
              <NewsCard
                newsId={news.id}
                imgSrc={news.thumbnail}
                title={news.title}
                description={news.description}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default NewsCardList;
