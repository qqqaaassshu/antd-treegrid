import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Switch } from "antd";
const TreeData = (props) => {
  const [data, setData] = useState([
    {
      priceKey: "BP#USDHKD",
      pairs: "USDHKD",
      tenors: "T+0",
      ask: 3.141056,
      bid: 3.134312,
      channel: "中国银行",
      valueDate: "2021-04-04",
      children: [
        {
          priceKey: "BP#USDHKD#T+0",
          pairs: "USDHKD",
          tenors: "T+0",
          ask: 3.141056,
          bid: 3.134322,
          channel: "中国银行",
          valueDate: "2021-04-04",
          children: [
            {
              priceKey: "CP#USDHKD#BOC#T+0",
              pairs: "USDHKD",
              tenors: "T+0",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中国银行",
              valueDate: "2021-04-04"
            },
            {
              priceKey: "CP#USDHKD#CITIC#T+0",
              pairs: "USDHKD",
              tenors: "T+0",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中信银行",
              valueDate: "2021-04-04"
            }
          ]
        },
        {
          priceKey: "BP#USDHKD#T+1",
          pairs: "USDHKD",
          tenors: "T+1",
          ask: 3.140056,
          bid: 3.13412,
          channel: "中信银行",
          valueDate: "2021-04-04",
          children: [
            {
              priceKey: "CP#USDHKD#BOC#T+1",
              pairs: "USDHKD",
              tenors: "T+1",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中国银行",
              valueDate: "2021-04-04"
            },
            {
              priceKey: "CP#USDHKD#CITIC#T+1",
              pairs: "USDHKD",
              tenors: "T+1",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中信银行",
              valueDate: "2021-04-04"
            }
          ]
        },
        {
          priceKey: "BP#USDHKD#T+2",
          pairs: "USDHKD",
          tenors: "T+2",
          ask: 3.140056,
          bid: 3.13412,
          channel: "中信银行",
          valueDate: "2021-04-04",
          children: [
            {
              priceKey: "CP#USDHKD#BOC#T+2",
              pairs: "USDHKD",
              tenors: "T+2",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中国银行",
              valueDate: "2021-04-04"
            },
            {
              priceKey: "CP#USDHKD#CITIC#T+2",
              pairs: "USDHKD",
              tenors: "T+2",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中信银行",
              valueDate: "2021-04-04"
            }
          ]
        }
      ]
    },
    {
      priceKey: "BP#AUDUSD",
      pairs: "AUDUSD",
      tenors: "T+0",
      ask: 3.141056,
      bid: 3.134312,
      channel: "中国银行",
      valueDate: "2021-04-04",
      children: [
        {
          priceKey: "BP#AUDUSD#T+0",
          pairs: "AUDUSD",
          tenors: "T+0",
          ask: 3.141056,
          bid: 3.134322,
          channel: "中国银行",
          valueDate: "2021-04-04",
          children: [
            {
              priceKey: "CP#AUDUSD#BOC#T+0",
              pairs: "AUDUSD",
              tenors: "T+0",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中国银行",
              valueDate: "2021-04-04"
            },
            {
              priceKey: "CP#AUDUSD#CITIC#T+0",
              pairs: "AUDUSD",
              tenors: "T+0",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中信银行",
              valueDate: "2021-04-04"
            }
          ]
        },
        {
          priceKey: "BP#AUDUSD#T+1",
          pairs: "AUDUSD",
          tenors: "T+1",
          ask: 3.140056,
          bid: 3.13412,
          channel: "中信银行",
          valueDate: "2021-04-04",
          children: [
            {
              priceKey: "CP#AUDUSD#BOC#T+1",
              pairs: "AUDUSD",
              tenors: "T+1",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中国银行",
              valueDate: "2021-04-04"
            },
            {
              priceKey: "CP#AUDUSD#CITIC#T+1",
              pairs: "AUDUSD",
              tenors: "T+1",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中信银行",
              valueDate: "2021-04-04"
            }
          ]
        },
        {
          priceKey: "BP#AUDUSD#T+2",
          pairs: "AUDUSD",
          tenors: "T+2",
          ask: 3.140056,
          bid: 3.13412,
          channel: "中信银行",
          valueDate: "2021-04-04",
          children: [
            {
              priceKey: "CP#AUDUSD#BOC#T+2",
              pairs: "AUDUSD",
              tenors: "T+2",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中国银行",
              valueDate: "2021-04-04"
            },
            {
              priceKey: "CP#AUDUSD#CITIC#T+2",
              pairs: "AUDUSD",
              tenors: "T+2",
              ask: 3.141056,
              bid: 3.134322,
              channel: "中信银行",
              valueDate: "2021-04-04"
            }
          ]
        }
      ]
    }
  ]);
  const onFilter = (value, record) => {
    console.log(value, "运行筛选");
    filterRowHiiden(data, "", false);
    return filterRowHiiden(data, value);
  };
  useEffect(() => {
    console.log(filterRowHiiden(data, "", false));
  }, [data]);
  const filterRowHiiden = (data, value, status) => {
    console.log("value", value);
    let filterData = [...data];
    const filterFunc = (data, value, status) => {
      data.forEach((item) => {
        if (status !== undefined) {
          item.hidden = status;
        } else {
          //判断期限是否相同
          if (item.tenors === value) {
            item.hidden = false;
          } else {
            item.hidden = true;
          }
        }

        if (item.children) {
          filterFunc(item.children, value, status);
        }
      });
    };
    filterFunc(filterData, value, status);
    console.log(filterData, "filterData");
    return filterData;
  };
  const columns = [
    {
      title: "货币对",
      dataIndex: "pairs",
      key: "pairs",
      filters: [
        { text: "USDHKD", value: "USDHKD" },
        { text: "AUDUSD", value: "AUDUSD" }
      ]
    },
    {
      title: "期限",
      dataIndex: "tenors",
      key: "tenors",
      filters: [
        { text: "T+0", value: "T+0" },
        { text: "T+1", value: "T+1" },
        { text: "T+2", value: "T+2" }
      ],
      onFilter: (value, record) => record.tenors === value
    },
    {
      title: "买入价",
      dataIndex: "bid",
      key: "bid"
    },
    {
      title: "卖出价",
      dataIndex: "ask",
      key: "ask"
    },
    {
      title: "渠道",
      dataIndex: "channel",
      key: "channel"
    },
    {
      title: "到期日",
      dataIndex: "valueDate",
      key: "valueDate"
    }
  ];

  return (
    <>
      <Table
        rowKey="priceKey"
        columns={columns}
        dataSource={data}
        onRow={(record) => {
          // 隐藏 hidden 为 true 的行
          if (record.hidden) {
            return {
              style: { display: "none" }
            };
          }
        }}
      />
    </>
  );
};

ReactDOM.render(<TreeData />, document.getElementById("container"));
