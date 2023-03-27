import { Col, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { CoinItem } from "../../data/coinItem";
import "./infoDashboard.scss";

function InfoDashboard({
  data,
  loading,
}: {
  data: CoinItem | undefined;
  loading: boolean;
}) {
  const [percentData, setPercentData] = useState({
    price: "N/A",
    marketCap: "N/A",
    volume: "N/A",
  });
  const percentChangeCalculate = (
    oldValue: number | undefined,
    newValue: number | undefined
  ) => {
    if (!oldValue || typeof newValue !== "number") return "N/A";
    return (((newValue! - oldValue!) / oldValue!) * 100).toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    );
  };

  useEffect(() => {
    return setPercentData({
      price: percentChangeCalculate(data?.prices[0][1], data?.prices[1][1]),
      marketCap: percentChangeCalculate(
        data?.market_caps[0][1],
        data?.market_caps[1][1]
      ),
      volume: percentChangeCalculate(
        data?.total_volumes[0][1],
        data?.total_volumes[1][1]
      ),
    });
  }, [data]);

  return (
    <Col>
      {loading && (
        <Row justify="center" align="top">
          <Typography.Title
            level={4}
            style={{ margin: 0, color: "whitesmoke" }}
          >
            loading...
          </Typography.Title>
        </Row>
      )}
      {!loading && (
        <>
          <Row justify="space-between" align="top">
            <Col span={8}>
              <Row justify="end">
                <Typography.Title
                  className={"title"}
                  level={5}
                  style={{ margin: 0 }}
                >
                  Prev. Price
                </Typography.Title>
              </Row>
              <Row justify="end">
                <Typography.Title
                  className={"value"}
                  level={4}
                  style={{ margin: 0 }}
                >
                  {data?.prices[0][1].toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }) ?? "N/A"}
                  {data && "$"}
                </Typography.Title>
              </Row>
            </Col>
            <Col span={8}>
              <Row justify="center">
                <Typography.Title
                  className={"title"}
                  level={5}
                  style={{ margin: 0 }}
                >
                  Price
                </Typography.Title>
              </Row>
              <Row justify="center">
                <Typography.Title
                  className={"value"}
                  level={4}
                  style={{ margin: 0 }}
                >
                  {data?.prices[1][1].toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }) ?? "N/A"}
                  {data && "$"}
                </Typography.Title>
              </Row>
            </Col>
            <Col span={8}>
              <Row justify="start">
                <Typography.Title
                  className={"title"}
                  level={5}
                  style={{ margin: 0 }}
                >
                  % Change
                </Typography.Title>
              </Row>
              <Row justify="start">
                <Typography.Title
                  className={`value ${
                    isNaN(parseFloat(percentData.price)) ||
                    parseFloat(percentData.price) === 0
                      ? ""
                      : parseFloat(percentData.price) > 0
                      ? "green"
                      : "red"
                  }`}
                  level={4}
                  style={{ margin: 0 }}
                >
                  {isNaN(parseFloat(percentData.price)) ||
                  parseFloat(percentData.price) === 0
                    ? percentData.price
                    : parseFloat(percentData.price) > 0
                    ? `+${percentData.price}%`
                    : `${percentData.price}%`}
                </Typography.Title>
              </Row>
            </Col>
          </Row>
          <Row justify="space-between" align="top">
            <Col span={8}>
              <Row justify="end">
                <Typography.Title
                  className={"title"}
                  level={5}
                  style={{ margin: 0 }}
                >
                  Prev. Market Cap
                </Typography.Title>
              </Row>
              <Row justify="end">
                <Typography.Title
                  className={"value"}
                  level={4}
                  style={{ margin: 0 }}
                >
                  {data?.market_caps[0][1].toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }) ?? "N/A"}
                  {data && "$"}
                </Typography.Title>
              </Row>
            </Col>
            <Col span={8}>
              <Row justify="center">
                <Typography.Title
                  className={"title"}
                  level={5}
                  style={{ margin: 0 }}
                >
                  Market Cap
                </Typography.Title>
              </Row>
              <Row justify="center">
                <Typography.Title
                  className={"value"}
                  level={4}
                  style={{ margin: 0 }}
                >
                  {data?.market_caps[1][1].toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }) ?? "N/A"}
                  {data && "$"}
                </Typography.Title>
              </Row>
            </Col>
            <Col span={8}>
              <Row justify="start">
                <Typography.Title
                  className={"title"}
                  level={5}
                  style={{ margin: 0 }}
                >
                  % Change
                </Typography.Title>
              </Row>
              <Row justify="start">
                <Typography.Title
                  className={`value ${
                    isNaN(parseFloat(percentData.marketCap)) ||
                    parseFloat(percentData.marketCap) === 0
                      ? ""
                      : parseFloat(percentData.marketCap) > 0
                      ? "green"
                      : "red"
                  }`}
                  level={4}
                  style={{ margin: 0 }}
                >
                  {isNaN(parseFloat(percentData.marketCap)) ||
                  parseFloat(percentData.marketCap) === 0
                    ? percentData.marketCap
                    : parseFloat(percentData.marketCap) > 0
                    ? `+${percentData.marketCap}%`
                    : `${percentData.marketCap}%`}
                </Typography.Title>
              </Row>
            </Col>
          </Row>
          <Row justify="space-between" align="top">
            <Col span={8}>
              <Row justify="end">
                <Typography.Title
                  className={"title"}
                  level={5}
                  style={{ margin: 0 }}
                >
                  Prev. Volume
                </Typography.Title>
              </Row>
              <Row justify="end">
                <Typography.Title
                  className={"value"}
                  level={4}
                  style={{ margin: 0 }}
                >
                  {data?.total_volumes[0][1].toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }) ?? "N/A"}
                </Typography.Title>
              </Row>
            </Col>
            <Col span={8}>
              <Row justify="center">
                <Typography.Title
                  className={"title"}
                  level={5}
                  style={{ margin: 0 }}
                >
                  Volume
                </Typography.Title>
              </Row>
              <Row justify="center">
                <Typography.Title
                  className={"value"}
                  level={4}
                  style={{ margin: 0 }}
                >
                  {data?.total_volumes[1][1].toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }) ?? "N/A"}
                </Typography.Title>
              </Row>
            </Col>
            <Col span={8}>
              <Row justify="start">
                <Typography.Title
                  className={"title"}
                  level={5}
                  style={{ margin: 0 }}
                >
                  % Change
                </Typography.Title>
              </Row>
              <Row justify="start">
                <Typography.Title
                  className={`value ${
                    isNaN(parseFloat(percentData.volume)) ||
                    parseFloat(percentData.volume) === 0
                      ? ""
                      : parseFloat(percentData.volume) > 0
                      ? "green"
                      : "red"
                  }`}
                  level={4}
                  style={{ margin: 0 }}
                >
                  {isNaN(parseFloat(percentData.volume)) ||
                  parseFloat(percentData.volume) === 0
                    ? percentData.volume
                    : parseFloat(percentData.volume) > 0
                    ? `+${percentData.volume}%`
                    : `${percentData.volume}%`}
                </Typography.Title>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Col>
  );
}

export default InfoDashboard;
