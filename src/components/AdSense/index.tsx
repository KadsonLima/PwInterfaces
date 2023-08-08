import Adsense from "@eisberg-labs/next-google-adsense";
import {AdUnit} from "@eisberg-labs/next-google-adsense";

export default function AdSense(){
    return (
        <>
          <Adsense client_id="ca-pub-7681391913996548"/>
          <AdUnit className="adsbygoogle block"
                data-ad-client="ca-pub-7681391913996548"
                data-ad-slot="..."
                data-ad-format="auto"
                data-full-width-responsive="true"/>;
        </>
    )
}