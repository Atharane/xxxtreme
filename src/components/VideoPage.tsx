const VideoPage = () => {
    const video_url =
      "https://storage.googleapis.com/bucket_atharva/rae_lil_black_and_white.mp4"
    return (<>
        <h1>Now watching video </h1>
        
        {/* add video tag that plays video_url */}
        <video src={video_url} controls></video>
    </>);
}
 
export default VideoPage;