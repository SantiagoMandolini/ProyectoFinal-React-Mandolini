import React, { useState, useEffect } from 'react';
import { Space, Spin, Switch } from 'antd';

const Loader = () => {
  const [auto, setAuto] = useState(false);
  const [percent, setPercent] = useState(-50);

  useEffect(() => {
    if (!auto) return;

    const interval = setInterval(() => {
      setPercent((v) => {
        const nextPercent = v + 5;
        return nextPercent > 150 ? -50 : nextPercent;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [auto]);

  const mergedPercent = auto ? 'auto' : percent;

  return (
    <Space>
      <Switch
        checkedChildren="Auto"
        unCheckedChildren="Auto"
        checked={auto}
        onChange={() => {
          setAuto(!auto);
          setPercent(-50);
        }}
      />
      <Spin percent={mergedPercent} size="small" />
      <Spin percent={mergedPercent} />
      <Spin percent={mergedPercent} size="large" />
    </Space>
  );
};

export default Loader;
``
