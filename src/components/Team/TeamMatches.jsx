import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ErrorImage from "./ErrorImage/ErrorImage.jpg";

export const TeamMatches = ({ matches }) => {
  const result = (match) => {
    if (match.radiant && match.radiant_win) return "Win";
    if (match.radiant && !match.radiant_win) return "Lose";
    if (!match.radiant && match.radiant_win) return "Lose";
    if (!match.radiant && !match.radiant_win) return "Win";
  };

  return (
    <div className="cardWrap">
      <p>Matches played</p>
      <Card className="cardbg">
        <Card.Header className="CardHeader">
          <Row className='matchesHeader'>
            <Col xs={5}>
              <div className="par">League</div>
            </Col>
            <Col>
              <Row className="d-flex playerRow">
                <div className="leftBar par">Duration</div>
                <div className="leftBar par">Result</div>
                <div className="rightBar par">Opponent</div>
              </Row>
            </Col>
          </Row>
        </Card.Header>
        {matches.length !== 0 ? (
          matches.map((match) => {
            return (
              <Card.Body key={match.match_id} className="cardBody">
                <Row className="playerRow">
                  <Col xs={5} className='leagueName'>
                    <div className="d-flex  playerRow " >
                      <p className="par ">{match.league_name}</p>
                    </div>
                  </Col>
                  <Col>
                    <Row className="d-flex chartRow">
                      <div className="leftBar duration">
                        <p className="par">
                          {Math.round(match.duration / 60)} mins
                        </p>
                      </div>
                      <div className="rightBar result">
                        <p className={result(match)==='Win'?'resWin par' : 'resLose par' }>{result(match)}</p>
                      </div>
                      <div className="rightBar playerRow d-flex opponent">
                        <div className='oposingTeam d-flex'>
                        <img
                          className="opponentLogo"
                          src={match.opposing_team_logo}
                          alt="VS"
                        />
                        <p className="enemyTeam">{match.opposing_team_name}</p>
                        </div>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            );
          })
        ) : (
          <image src={ErrorImage} />
        )}
      </Card>
    </div>
  );
};
