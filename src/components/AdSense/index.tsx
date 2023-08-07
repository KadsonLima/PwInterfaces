import Adsense from "@eisberg-labs/next-google-adsense";
import Adunit from "@eisberg-labs/next-google-adsense/dist/adunit";

export default function AdSense(){
    return (
        <>
          <Adsense client_id="ca-pub-7681391913996548"/>
          <Adunit className="adsbygoogle block"
                data-ad-client="ca-pub-7681391913996548"
                data-ad-slot="..."
                data-ad-format="auto"
                data-full-width-responsive="true"/>;
        </>
    )
}