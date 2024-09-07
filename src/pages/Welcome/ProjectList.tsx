import React from "react";
import { FC } from "react";
import { List, Typography } from "antd";

import style from "./css/ProjectList.module.scss";
import { useScrollAnimationRefs } from "../../hooks";

function ProjectList() {
  return (
    <div className={style.container}>
      <List
        header={<Typography.Title level={3}>科协优秀项目</Typography.Title>}
        dataSource={data}
        renderItem={(item) => (
          <li style={{ borderBottom: "1px solid #f0f0f0" }}>
            <Project
              name={item.name}
              description={item.description}
              language={item.language}
              avatar={item.avatar}
              url={item.url}
              languageColor={item.languageColor}
            />
          </li>
        )}
      />
    </div>
  );
}

interface IProject {
  name: string;
  description: string;
  language: string;
  avatar: string;
  url: string;
  languageColor: string;
}

const Project: FC<IProject> = ({
  name,
  description,
  language,
  avatar,
  url,
  languageColor,
}) => {
  const [ScrollAnimationRefs, addScrollAnimationRefs] =
    useScrollAnimationRefs();

  return (
    <div className={style.project} ref={addScrollAnimationRefs}>
      <span>
        <span className={style.name}>
          <a href={url} target="_blank" rel="noreferrer">
            <img className={style.avatar} src={`${avatar}&s=20`} alt="" />
            {name}
          </a>
          <span className={style.tags}>
            {language}
            <span
              className={style.language}
              style={{ background: languageColor }}
            />
          </span>
        </span>
      </span>
      <span className={style.description}>{description}</span>
    </div>
  );
};

export default ProjectList;

const data: Array<IProject> = [
  {
    name: "GUET校园圈APP",
    description: "可以查看课表等教务信息，支持安卓和IOS",
    language: "Dart(Flutter)",
    avatar: "https://avatars.githubusercontent.com/u/59408438?v=4&size=64",
    url: "https://www.guethub.net",
    languageColor: "#00B4AB",
  },
  {
    name: "Flexml",
    description: "🚀基于Litho的Android高性能动态业务容器。",
    language: "Kotlin",
    avatar: "https://avatars.githubusercontent.com/u/25474959?v=4",
    url: "https://github.com/sanyuankexie/Flexml",
    languageColor: "#F18E33",
  },
  {
    name: "neetbox",
    description:
      "A naive dashboard for local/remote/distributed deep learning project monitoring.",
    language: "Python",
    avatar: "https://avatars.githubusercontent.com/u/33346934?v=4",
    url: "https://github.com/visualDust/neetbox",
    languageColor: "#3572A5",
  },
  {
    name: "ml.akasaki.space",
    description:
      "帮助入门基于深度学习的计算机视觉，访问 https://ml.akasaki.space 查看。",
    language: "Python",
    avatar: "https://avatars.githubusercontent.com/u/33346934?v=4",
    url: "https://ml.akasaki.space",
    languageColor: "#3572A5",
  },
  {
    name: "OneNet-IoT",
    description: "基于OneNet平台okHttp协议的远程环境监控App开发",
    language: "Java",
    avatar: "https://avatars.githubusercontent.com/u/37988832?s=48&v=4",
    url: "https://github.com/sanyuankexie/OneNet-IoT",
    languageColor: "#b07219",
  },
  {
    name: "bobibo",
    description: "能把图片转换成字符画的简单cli 🎉",
    language: "Golang",
    avatar: "https://avatars.githubusercontent.com/u/94043894?v=4",
    url: "https://github.com/orzation/bobibo",
    languageColor: "#00add8",
  },
];
