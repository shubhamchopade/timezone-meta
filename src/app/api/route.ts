import { NextResponse } from "next/server";
import { getImage } from "../../../utils/generateImage";

const projectId = "64829c05a0882260c5b9";
const bucketId = "64829c970e840dba76e8";
const token =
  "c3e175b545a69dcdcfce46cf12d03e98162f7968645554f22e2119195f282b142ed54f7db31e8fa0631eed1ef1ce0390b0811a5e980b30911d4d95b72ae226683b62d05087ebe4aca072608500c308662912817106ab210365c776bd384b65cbfb44e633bcef960986a805333d594a776e658625c3a518ff636d725a59a08d88";

export async function POST(req: Request) {
  const body = await req.json();

  const hour = body.hour;
  const minute = body.minute;
  const timezone = body.timezone;
  const to = body.to;

  const sourceTimeZone =
    timezone.toLowerCase() === "pst"
      ? "America/Los_Angeles"
      : "America/New_York";
  const sourceTime = new Date();

  sourceTime.setHours(hour);
  sourceTime.setMinutes(minute);
  sourceTime.setSeconds(0);
  const sourceTimeString = `${timezone.toLowerCase()}: ${sourceTime.toLocaleString(
    "en-US",
    { timeZone: sourceTimeZone }
  )}`;

  const destinationTimeZone =
    to.toLowerCase() === "pst" ? "America/Los_Angeles" : "America/New_York";
  const destinationTimeString = `${to.toLowerCase()}: ${sourceTime.toLocaleString(
    "en-US",
    { timeZone: destinationTimeZone }
  )}`;

  const fileId = `${hour}-${minute}-${timezone}-${to}`;

  const url = `https://apw.techsapien.dev/v1/storage/buckets/${bucketId}/files/${fileId}/view?project=${projectId}`;

  await getImage(sourceTimeString, destinationTimeString, fileId);

  return NextResponse.json({ url });
}
