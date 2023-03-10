import Image from "next/legacy/image";

export default function ProjectItem({ data }) {
  const title = data.properties.name.title[0]?.plain_text;
  const github = data.properties.github.url;
  const youtube = data.properties.youtube.url;
  const description = data.properties.description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.tag.multi_select;
  const start = data.properties?.period.date.start;
  const end = data.properties?.period.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="10%"
        height="10%"
        layout="responsive"
        objectFit="cover"
      />

      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={github}>깃허브 바로가기</a>
        <a href={youtube}>유튜브 시연영상 보러가기</a>
        <p className="my-1 ">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        {/*
        <div className="mt-2">
          {tags.map((aTag) => (
            <span
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </span>
          ))}
        </div>
          */}
      </div>
    </div>
  );
}
