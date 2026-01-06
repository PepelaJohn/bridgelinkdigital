'use client';

// import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GetReferrerPage() {
  useEffect(() => {
    if (typeof window !== undefined) {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');

      console.log('UTM Source:', utmSource);
      console.log('UTM Medium:', utmMedium);
      console.log('UTM Campaign:', utmCampaign);

      // You can send this to analytics or log it
    }
  }, []);

  return <></>;
}
