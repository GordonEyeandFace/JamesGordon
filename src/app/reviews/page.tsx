'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InfiniteSlider from '@/components/InfiniteSlider';
import BookingCTA from '@/components/BookingCTA';
import CherryFinancing from '@/components/CherryFinancing';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const reviewLogos = [
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-healthgrades.svg', alt: 'Healthgrades' },
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-navmds.svg',        alt: 'NavMDs' },
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-ratedmds.svg',      alt: 'RatedMDs' },
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-realself.svg',      alt: 'RealSelf' },
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-us-news.svg',       alt: 'US News' },
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-vitals-01.svg',     alt: 'Vitals' },
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-webmd.svg',         alt: 'WebMD' },
];

type ReviewWithImage = { text: string; author: string; source: string; image: string };
type ReviewWithPair  = { text: string; author: string; source: string; before: string; after: string };
type Review = ReviewWithImage | ReviewWithPair;

const reviews: Review[] = [
    { text: "Wow! I had an incredible experience working with Dr. Gordon and Mari. The facility is clean and serene. The staff excellent and Dr. Gordon is attentive, kind, and easy to chat with. He is an excellent doctor and a brilliant artist. The post op experience was completely painless, albeit some swelling and now my peripheral vision is infinitely better and as a bonus I look ten years younger. This whole experience was a complete confidence boost. And now I'm excited to drive without feeling anxious or scared that I can't see well. Worth every penny. Thank you, Dr. Gordon! I traveled all the way from Brooklyn to see him and it was worth the trip.", author: 'Kendal Green', source: 'Google Reviews', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/google/1. Kendal Green Review.webp' },
    { text: "I recently had an upper blepharoplasty with Dr. James Gordon, and I couldn't be more pleased with the results. My vision was being affected by my upper eyelid drooping over my eyes, and it was also making me look older than I felt. After the procedure, the improvement was immediate, and the transformation has been incredible. The surgery itself went smoothly, and the recovery process was fast and painless. While I did experience some swelling, I was able to resume my daily activities by day three. Dr. Gordon was attentive and available to answer all of my questions throughout the process, which gave me peace of mind. Now, I love looking at myself in the mirror and feel more confident than ever. I've included pictures taken right before the surgery and one week post-op, just before my suture removal appointment. I highly recommend Dr. Gordon for anyone considering this procedure!", author: 'Anya Viron', source: 'Google Reviews', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/google/2. Anya Viron.webp' },
    { text: "I had a blepharoplasty with Dr. Gordon and couldn't be happier with the results! It took me five years to finally go through with the procedure, but I'm so glad I chose Dr. Gordon. The post-surgery recovery was smooth, and after just one week, my eyes looked amazing! Dr. Gordon mentioned that the full results would be visible in about three months, but honestly, I already look fantastic if I say so myself! I highly recommend Dr. Gordon to anyone considering this procedure—professional, skilled, and truly delivers outstanding results!", author: 'Magdalena Sanchez', source: 'Google Reviews', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/google/3. Magdalena Sanchez.webp' },
    { text: "I highly recommend Dr. Gordon for anyone considering blepharoplasty surgery! My results are amazing! He is very skilled and professional with outstanding results! Just look at all his reviews. So glad I trusted him with my procedure!!", author: 'vidi1234', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/1. vidi1234.webp' },
    { text: "I was hesitant about eyelid surgery even though I could see that I had \"tired-looking\" eyes. I had been thinking about it for a few years but never pulled the trigger as you always hear the occasional horror story. And let's face it, you really don't know if you made the right choice on a doctor until later - and by then, in some cases might be too late. Well, I'm here to tell you, if you're thinking about it or are not sure - you will not be disappointed by choosing Dr.Gordon! He walked me through every step that was to be taken including what to expect (short term & long term) in honest terms. He is extremely knowledgeable, caring and has genuine concern. I could go on and on but here is my before and after pics after exactly one week! Needless to say, i am extremely satisfied and would recommend Dr. Gordon without reservation!!!", author: 'DJg25', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/2. DJg25.webp' },
    { text: "I had a blepharoplasty with Dr. Gordon and couldn't be happier with the results! It took me five years to finally go through with the procedure, but I'm so glad I chose Dr. Gordon. The post-surgery recovery was smooth, and after just one week, my eyes looked amazing! Dr. Gordon mentioned that the full results would be visible in about three months, but honestly, I already look fantastic if I say so myself! I highly recommend Dr. Gordon to anyone considering this procedure—professional, skilled, and truly delivers outstanding results!", author: 'M.san', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/3. M.san.webp' },
    { text: "I went to Dr. Gordon to adjust/potentially dissolve undereye filler after a poor Medspa experience 1.5 years ago. Though highly reviewed, the Medspa injected too much filler superficially and too low, creating a ridge that made my undereye area look even more hollow. After reading some horror stories about underye filler/dissolving online, I chose to proceed with Dr. Gordon instead because of his expertise in the eye area, and I've been very happy with that decision. Dr. Gordon is meticulous, detail-oriented, and restrained with his filler placement. After my first appointment, I went home and found that, in certain lighting, a small area of my undereye needed a bit of a tweak. Though really small and not even visible in most lighting he took it seriously at my follow-up, looked at the photos I had taken, and made the fix with a tiny amount of dissolver. Similarly, I had initially received masseter botox, but it was not enough because of my muscle strength. He also addressed this and ensured that I was happy, emphasizing that I should call or come back at any time if I wasn't happy with the results. Overall, I'm so glad to have found Dr. Gordon, and a bit frustrated that I didn't go with a doctor from the get-go. My initial concern that a doctor would be far more expensive than a medspa turned out to not be true. I highly recommend and will definitely be returning for any future needs.", author: 'asalkhatae', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/4. asalkhatae.webp' },
    { text: "Phenomenal Dr! I had a blepharoplasty done on my left eye and from start to finish it was a great experience. The easiest recovery and I looked like a new person a week later! Dr G is a perfect gentleman and a very cool guy. He even played Metallica for me during the surgery!", author: 'Exquisite922032', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/6. Exquisite922032.webp' },
    { text: "My only regret is that I didn't do it sooner. Dr. Gordon has done an amazing job. I'm only 7 weeks post op, but the difference was instant. He is a talented doctor with a great bed side manner. He answers all questions and explains everything in great detail. He is friendly and very personable, easy to talk to. I am recommending him to everyone!!", author: 'Peaceful176533', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/7. Peaceful176533.webp' },
    { text: "I was referred to Dr Gordon by my ophthalmologist after I noticed my eyelids drooping more each year. It did effect my vision, as my eyelids hung heavily over my eyelashes. This was a slow progression as I aged. But most noticeable were the comments I'd hear each day from family and colleagues; did I sleep ok? Do I feel ok? Etc. I dealt with it, trying to find creams and solutions, tried changing my diet, I don't drink or smoke. It was getting worse and I started to dislike my appearance. I looked tired. I looked worn down. I didn't look like the vibrant person I am. I was fortunate to meet Dr. Gordon. I was nervous about having my eyes done. I did not want to look like a different person. I just wanted to take away that extra \"stuff\" that made me appear tired and worn. Dr. Gordon assured me it's not his practice to make such extreme changes. He does not go to the extreme as some plastic surgeons do. I was comforted by his advice and did my research. Dr. Gordon and his team were constantly in touch with me, before and after my surgery. I had both eyes done, upper and lower. I was made comfortable and within hours of being discharged, he called me at home to see how I was doing. He continued to monitor my progress until we met again, post op in his office. Personal care and touch points mean a lot to a patient. It's not often you receive that kind of care. I am grateful for his expertise, patient care, and I highly recommend Dr. James Gordon to future candidates for Blepharoplasty.", author: 'Easygoing585844', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/8. Easygoing585844.webp' },
    { text: "I've been going to Dr James Gordon for a few years for undereye filler for eye bags. I couldn't find other doctors that knew how to properly place the fillers like him. I regretfully went to another nurse for touch ups since she was closer to me and she botched my under eyes. I decided to make a trip to see Dr James Gordon and he made me feel like my old self again. Thank you so much!! I will not allow anyone else to touch my under eyes again…", author: 'Cgn 95', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/9. Cgn 95.webp' },
    { text: "I have had a drooping lids for years but did not have the courage to proceed with the surgery. My daughter referred me to Dr. Gordon and I could not be more grateful. From the beginning to the end the office, staff and surgical team made me feel very comfortable. The surgery went very well and recovery was minimal. Dr. Gordon and staff were absolutely phenomenal, and I will be recommending the team to all.", author: 'Cathy1229', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/10. Cathy1229.webp' },
    { text: "Let me start by saying Dr. Gordon is very conservative. I've been to him several times for eyelid surgery and the first two times he said I wasn't quite ready for it and he didn't want to do it. Back in April, he finally said yes! On 6/9, I went in for surgery and was very nervous (I elected for local anesthesia only.) He took his time explaining everything before the surgery. Once he was ready we chatted like old friends the entire time. He called me that same day and the next to ask how I was feeling and to see if I had any follow up questions (I did not.) Today I had my stitches removed (day 6) and I am thrilled with the results! I am sharing daily photos (I forgot to take one on day 4!) and will continue to add up to the two week mark, but the healing process has been amazing and I look forward to wearing makeup again! Outstanding experience...I'd do it again if I had to!", author: 'Fantastic552515', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/11. Fantastic552515.webp' },
    { text: "Wonderful experience with DR James Gordon is a wonderful Surgeon ,and the staff was always helpful and kind I am so glad I chose DR Gordon and I highly recommend to anyone Sincerely Alfredo Puerta", author: 'Phenomenal593657', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/13. Phenomenal593657.webp' },
    { text: "Dr. Gordon is an excellent eye doctor and surgeon. He is personable, professional, and has a natural and/or developed ability to blend the aesthetics and functionality of eyelid shape and spacing with overall facial features, striving to maintain a natural look. Only one week after upper blepharoplasty surgery, my peripheral vision is improved and my eyes have a more balanced appearance. I'm very happy with the outcome.", author: 'RealSelfProfile100', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/14. RealSelfProfile100.webp' },
    { text: "I've always had hooded eyes, and didn't mind them too much. But as I've approached my mid-40's, the skin above my eyes has gotten thinner and saggier, and was making me look older than I really am. My lids had become so heavy that they were sitting on my eyelashes. I also felt like I looked tired and angry most of the time, even with a full nights sleep. So I began research on RealSelf and found that there was a doctor nearby who was an expert in this type of surgery and had tons of before and after pictures showing extensive experience in correcting this issue. I am a visual artist by trade (photographer/digital retoucher), so it's my job to notice the tiniest of details and imperfections. I wanted to look younger and refreshed, but not look like I \"had work done\". I met with Dr. Gordon in person and found him to be honest, trustworthy, and a genuinely nice person. I was fully relaxed and at ease during the surgery (awake but with a Xanax to make me super relaxed), and with the local numbing I literally did not feel a thing. I was relaxed enough to be talking and joking with the doctor throughout the whole procedure, genuinely felt no pain at all other than the small amount of local numbing initially. I also had the doctor add a little filler in my tear throughs to ged rid of the purplish hollow areas under my eyes. He did that part first and it was a little painful/uncomfortable, but this was my first experience with fillers. Makes me look refreshed without needing to cake on underage concealer every morning. Once the surgery was complete, I was given full instructions for aftercare and Dr. Gordon even personally gave me a call later that evening to check in on me to make sure I was doing okay. There was a staff member who was available by text if I had any questions or concerns. I was red and swollen and in a small amount of pain for a few days after, so I laid low, caught up on Netflix, and let myself heal. Tylenol and the Rx eye cream helped a lot. My surgery was on a Thursday, and by Monday I felt well enough to run a couple of errands and do some light shopping (wearing sunglasses of course to hide my stitches). Eight days after my surgery I returned to have my stitches taken out -- by the way I have to mention how precise and careful the stitches were! Seriously impressive, so as to make the scar basically invisible in the new crease of my eye. My stitches came out and except for a small amount of redness and a tiny bit of swelling, you would never know I had surgery a week ago. Now a few days later, the swelling is almost completely gone and I have a pretty good idea of the final results and I am so happy! I would highly recommend Dr. Gordon if you are in suburban NYC and looking for a precise and skilled eye surgeon. It is not inexpensive, but it is money well spent!", author: 'GreenEyes777', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/16. GreenEyes777.webp' },
    { text: "Dr. Gordon was everything the reviews said he would be! He was very knowledgeable, professional, honest, and caring. He offers a caring bedside manner many doctors lack today. He called multiple times after the procedure to check on me as well as answered my call right away when I had some questions before and after the surgery. He is truly amazing!", author: 'justan0rdinaryme', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/18. justan0rdinaryme.webp' },
    { text: "Dr. Gordon did a fantastic job. I have very deep dark under eye hollows. I had under eye restylane injections a few years ago but it resulted in severe bruises that lasted for weeks and the improvement was very minimal. I was dreading the procedure but this time the result was nothing short of amazing. Dr. Gordon pinpointed the injection sites with such surgical precision, you would think he was using some invisible ultrasound device. The improvement was immediate and there was almost no bruising. You couldn't find a better doctor for an under eye procedure.", author: 'aynat56', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/22. aynat56.webp' },
    { text: "Dr. James R. Gordon is an excellent physician, a world-class surgeon, and a sincerely caring person. I was totally comfortable with him from our first meeting. He took time to explain the procedure I needed, in detail, and answered all my questions, clearly and concisely. I had lost much of my peripheral vision in both eyes due to profoundly hooded upper eyelids. My overall vision was seriously impaired. Dr. Gordon's surgical center is state-of-the-art. His entire staff is outstanding. I felt relaxed and confident going into surgery, and saw a positive result immediately after. The entire process has been completely pain-free and my recovery is progressing rapidly. Dr. Gordon removed the stitches this morning. It is only eight (8) days after my surgery and, even though I still have some swelling, the improvement is evident. I am delighted to recommend Dr. James R. Gordon unconditionally. He is a treasure, and I am deeply grateful for him and his exceptional abilities. God bless you Dr. Gordon!", author: 'Iron Grandma', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/23. Iron Grandma.webp' },
    { text: "I had eyelid surgery one week ago and am already thrilled with my results. Dr. Gordon took the time to meet with me, listen to me and to consult with me. He appropriately set my expectations and prepared me for the procedure and my recovery. My eyelids look great, very natural, better than they ever looked and I know I am still swollen.", author: 'randeestapleton', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/24. randeestapleton.webp' },
    { text: "I am 4 hours post op upper Bleph and couldn't be happier! Ive been wanting to do this for years but I suffer from severe panic disorder and was afraid Id freak out during the procedure. After consulting with 2 top occuloplastic surgeons and 2 famous nyc plastic surgeons I chose Dr. Gordon. His expertise, confidence, his not being worried about my panic attacks affecting the procedure, and proximity to my home made him the right fit. I di not take any anesthesia....I chose to take valium 5mg by mouth and lidocaine injections as Dr. Gordon said its a simple procedure that can be done in his office. He was 100% correct and save me about 1300 on anesthesiology cost. I was wide awake during the entire procedure with minimal anxiety after the valium kicked in. The lidocaine injections into the eyelid pinched a little but that's it. I felt NO PAIN AT ALL during the procedure. I'm 4 hours post op and do not need any pain meds. I'm just a little sore and feel tight due to the swelling as to be expected. But these results! WOW! Much better then what I anticipated!! Eye brows symmetrical and you can hardly see the sutures. My whole face opened up so pleased. I will be posting pics everyday. I used this forum for my research so I want to give back!!", author: 'purrrfect35', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/26. purrrfect35.webp' },
    { text: "I've been going to dr Gordon for years and he always makes my lips look perfect. He does it gradually and is very careful not to go overboard. I highly recommend him for any facial filler needs. Mine came out beautiful.", author: 'princessapeypoo', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/28. princessapeypoo.webp' },
    { text: "I am being brave no makeup no filters just a bare face on my 1st day of Radiesse. Dramatic results, Fuller cheeks, much better nasolabial folds smoothed out. All in all I am extremely happy with the results so far. I have slight swelling at the side of my mouth on both sides but Dr Gordon said this will subside in the next few days. So far I LOVE the results. I have had Restylane in the past and was pleased but this is different much more of a result. I will be 59 this year.", author: 'lorraine1010', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/29. lorraine1010.webp' },
    { text: "I had the pleasure of meeting with Dr. Gordon several months ago for a consultation for an upper eye lid surgery. Dr. Gordon was very professional and helpful explaining this procedure. I had my surgery in November with phenomenal results. I am already feeling considerable change.", author: 'jakdikmen', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/30. jakdikmen.webp' },
    { text: "I had a terrific experience with Dr J.R Gordon. He took the time to listen. He cares about his patients. My lips were losing volume and he suggested I get Restylane silk fillers. I love my lips now. Thank you Dr. Gordon.", author: 'V.T.V', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/34. V.T.V.webp' },
    { text: "I kind of have undefeated bags and a slight crease under my eyes that magnifies it all. The trait is hereditary unfortunately. I honestly felt like make up didn't do the trick to cover it all. I researched for about a year and finally decided to choose Dr Gordon to give me restylane shots to reduce the \"baggage\".", author: 'TamThomas', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/35. TamThomas.webp' },
    { text: "AMAZING!!! I can't believe the difference that the iopidine eye drops made. In recent months I noticed that my right eye looked \"droopy\". When I saw Dr. Gordon he recommended I try the iopidone eye drops, that he has had good results with the drops tightening the eyelid. I was skeptical, but I was amazed at the difference it made. What a great experience, Dr Gordon is wonderful dr that doesn't push surgery but looks to be more conservative when with his treatments when it is best for his client. Great Doctor and great results!", author: 'veronicaharrison', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/36. veronicaharrison.webp' },
    { text: "What can one say about the consummate professional? I had been experiencing difficulty with my upper eye lids obstructing my vision. After a consultation with Dr. Gordon, it was determined that the upper eye lids did in fact partially block my vision and Dr. Gordon perform the surgery to remove the excess sign. It was a success and all along the way Dr. Gordon and his staff were there to guide me to a successful conclusion. Since the surgery I have been a patient and now as my eye doctor I know I am in good hands. No hesitation to recommend the best at his craft. And I add that the recuperation from the surgery is nothing to fear.", author: 'Michael F.', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/37. Michael F.webp' },
    { text: "As a nurse practitioner with over 13 years experience working in the medical field, choice of provider was very important to me when I decided to get facial fillers. I couldn't have been happier with my experience with Dr. Gordon and his staff. I had a total of two syringes of Restylane placed in my cheeks and under eyes, over two sessions, three weeks apart. I'm very happy with the results! My dark circles have decreased and youthful volume returned to my cheeks. Very happy customer!", author: 'emilysarana', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/38. emilysarana.webp' },
    { text: "Dr. Gordon did an amazing job restoring youth to my face. After 2 stressful years of working 80 hour work weeks I could not recognize the tired face looking back at me in the mirror. I have had genetic tear troughs and dark circles since I was about 10 years old, but the stress coupled with loss of fat in my face from aging exacerbated the problem. I was extremely nervous about getting injections so close to my eye area. The first time I had injects when I was 27 was on my nasolabial folds. I went to a dermatologist and they left my face looking lumpy. After weeks of searching reviews on this site I decided to go on a consultation with Dr. Gordon. I explained my issues, and after hearing his suggested solutions and results I could expect, I had my first round of injections the same day. No amount of filler can get rid of dark undereye circles, but at least now the hollows are filled in so concealer actually works and my face doesn't look like it's melting off. In total I had 2 syringes of Juvederm and 1 of Lyft. The first day we used only 1/2 a syringe, it wasn't enough to make my problem areas go away, but I appreciated that Dr. Gordon did not want to over fill my face and wanted to see how the product would fall in the next couple of weeks. Slowly, about every 2 weeks we added a little more for a total of 2 syringes. I did not need the full 2 under my eyes and a little went to my lips and cheeks. When I saw what a difference the filler made to my cheeks I decided to get another syringe of Lyft which is specially formulated to act like a facelift and lift up the face reducing nasolabial folds. And WOW, were the results amazing! Dr. Gordon's work looks completely natural, I feel like I look like myself , but a well rested vibrant version. My friends think I look great, but can't tell I had work done.", author: '29yof', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/40. 29yof.webp' },
    { text: "I am a 46 year old mother of 5. I was not happy but accepted the wrinkles that life has brought me along the way. I could not, however, grow to come used to the eye bags that were forming over my eyelids. They made me feel old, tired and very unattractive. Today I received surgery to correct my self esteem crushed.. Dr. James Gordon in Harrison NY made my experience very comfortable and his expertise was fantastic. The procedure was over before I knew it and on day 1, the pain is quite tolerable.", author: 'chenry123', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/41. Chenry.webp' },
    { text: "Dr. Gorton was simply amazing. He performed my surgery with the utmost of care and precision. He made me feel completely at ease and took care of a few other moles that were of concern. The effects of the surgery were immediate and I cannot believe that I did not get this done sooner. As soon as I left the office, I was able to see that I could see so much better.", author: '620Alana', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/42. 620Alana.webp' },
    { text: "i have thin lips which i dont completely hate but arent fond of either. Again, i was very leery about have anything injected in my face or lips, but i wanted bigger lips. Dr. Gordon is very conservative, so i ended up convincing him that i needed more fillers in my lips. i wanted a fuller look. He thinks less is more but i kept convincing him so he gave me more fillers :) i am extremely pleased with the results. it didnt even hurt , i had some swelling but it subsided in 2 days. couldnt be any happier.", author: 'meimeiliu', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/43. meimeiliu.webp' },
    { text: "I had my first child four years ago, and my second two years ago. It's a rarity, but I'd say that my figure has improved since having children. The skin around my eyes, however, made me appear exhausted and prematurely aged. I hated the dark circles, the depression and the lines. I had no desire to appear ten years younger. Rather, I wanted a more rested \"me\"--the \"me\" before kids came along, and before my life became a carousel of interrupted sleep and constant rushing. I wanted the results, most of all, to appear natural.", author: 'guarded', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/46. guarded.webp' },
    { text: "Over the past couple of years I noticed my eyelids drooping more and more. Not only did my field of vision decrease, but I also looked older and tired. I decided to talk with my optometrist and she recommended Dr. Gordon. It was obvious to both of us that this surgery did need to be done to restore my full field of vision.", author: 'Cristine52', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/48. Cristine52.webp' },
    { text: "Dr James R Gordon is the Best I would recommend him. His personality was great I was made to feel comfortable not nerves he explained everything to me very clear He is just the Best, Thank you Dr Gordon!", author: 'Funny3680', source: 'RealSelf', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/patient-reviews/realself/048.webp' }
];

// Single SVG that already contains both before & after side-by-side —
// overlays the Before / After badges + centre divider to match homepage style
const SingleImageBeforeAfterFrame = ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative w-full h-full min-h-[140px] md:min-h-[240px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
);

const BeforeAfterPanel = ({ review }: { review: ReviewWithPair }) => (
    <div className="flex w-full h-full min-h-[140px] md:min-h-[240px] border-[1.5px] border-[#2A2E37]">
        <div className="relative w-1/2 border-r-[1.5px] border-[#2A2E37] bg-gray-100">
            {review.before && <Image src={review.before} alt="Before" fill className="object-cover" />}
            <div className="absolute bottom-0 left-0 right-0 text-center text-[10px] font-bold text-white bg-black/60 py-1.5 uppercase tracking-wider backdrop-blur-sm">Before</div>
        </div>
        <div className="relative w-1/2 bg-gray-100">
            {review.after && <Image src={review.after} alt="After" fill className="object-cover" />}
            <div className="absolute bottom-0 left-0 right-0 text-center text-[10px] font-bold text-white bg-[#8B1D2D]/90 py-1.5 uppercase tracking-wider backdrop-blur-sm">After</div>
        </div>
    </div>
);

// Alternating row: odd = text left / image right, even = image left / text right
const ReviewRow = ({ review, idx }: { review: Review; idx: number }) => {
    const isOdd = idx % 2 === 0;
    const textBlock = (
        <div className="flex flex-col justify-center px-6 md:px-10 py-8 md:py-0 md:w-1/2">
            <div className="flex justify-center mb-5 md:mb-6">
                <Image
                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/trusted/12-quotation-mark.png"
                    alt="Quote"
                    width={72}
                    height={54}
                    className="h-12 md:h-14 w-auto opacity-90"
                />
            </div>
            <p className="font-sans text-[15px] md:text-[16px] text-[#2A2E37] leading-relaxed mb-4">
                {review.text}
            </p>
            <p className="font-sans font-bold text-[12px] md:text-[13px] text-[#2A2E37] uppercase tracking-wider">
                {review.author} &mdash; {review.source}
            </p>
        </div>
    );
    const imageBlock = (
        <div className="w-full md:w-1/2 flex-shrink-0 md:min-h-[300px] relative">
            {'image' in review && review.image ? (
                <SingleImageBeforeAfterFrame src={review.image as string} alt={review.author} />
            ) : (
                <BeforeAfterPanel review={review as ReviewWithPair} />
            )}
        </div>
    );
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className={`${isOdd ? 'flex-col' : 'flex-col-reverse'} flex md:flex-row mb-5 md:mb-12 overflow-hidden`}
        >
            {isOdd ? <>{textBlock}{imageBlock}</> : <>{imageBlock}{textBlock}</>}
        </motion.div>
    );
};

const REVIEWS_PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

export default function ReviewsPage() {
    const [currentPage, setCurrentPage] = React.useState(1);

    const pagedReviews = reviews.slice(
        (currentPage - 1) * REVIEWS_PER_PAGE,
        currentPage * REVIEWS_PER_PAGE
    );

    const handlePage = (page: number) => {
        if (page < 1 || page > TOTAL_PAGES) return;
        setCurrentPage(page);
        document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ─── 1. HERO IMAGE ───────────────────────────────────────────────── */}
            <section className="relative w-full pt-[50px]">
                <div
                    className="relative z-[2] w-full overflow-hidden min-h-[320px] sm:min-h-[400px]"
                    style={{ aspectRatio: '16 / 7.5', maxHeight: 'calc(100vh - 120px)' }}
                >
                    <Image
                        src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/page/trusted-by-patience-hero-bg.svg"
                        alt="Dr. James Gordon injecting patient"
                        fill
                        className="object-cover object-center opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/15 z-[1]" />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent z-[1]" />
                </div>
            </section>

            {/* ─── 2. FLOATING OVERLAP BOX ─────────────────────────────────────── */}
            <div className="relative z-20 -mt-[60px] md:-mt-[77px] px-4 md:px-16 lg:px-24 drop-shadow-2xl">
                <div 
                    className="relative isolate z-10 w-full max-w-[1300px] mx-auto rounded-[28px] p-[12px] md:p-[17px] overflow-hidden"
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(255, 255, 255, 0.1) 0px 0px 40px' }}
                >
                    <div className="absolute inset-0 -z-30 rounded-[28px] backdrop-blur-[4px]" />
                    <div className="absolute inset-0 -z-10 rounded-[28px] border border-white/20" />
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
                        className="bg-dark/95 rounded-[22px] relative overflow-hidden px-8 md:px-12 flex flex-col items-center justify-center text-center shadow-2xl"
                        style={{ minHeight: 'clamp(90px, 12vw, 160px)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 60px inset' }}
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="font-bold text-white tracking-[0.12em] font-sans uppercase drop-shadow-lg mb-2"
                            style={{ fontSize: 'clamp(14px, 2.8vw, 36px)' }}
                        >
                            TRUSTED BY PATIENTS
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            className="block font-medium tracking-normal normal-case opacity-90 text-secondary"
                            style={{ fontSize: 'clamp(13px, 1.8vw, 26px)' }}
                        >
                            Over 2,000 five-star reviews across the most trusted sources
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* ─── 3. LOGO CAROUSEL ────────────────────────────────────────────── */}
            <section className="pt-10 pb-10 bg-white shrink-0">
                <div className="w-full">
                    <InfiniteSlider speed={40} hoverSpeed={15} gap={16} fadeMask={true}>
                        {reviewLogos.map(logo => (
                            <div key={logo.alt} className="flex items-center justify-center px-2">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={140}
                                    height={50}
                                    className="h-10 md:h-14 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </InfiniteSlider>
                </div>
            </section>

            {/* ─── 4. ALTERNATING REVIEW ROWS ──────────────────────────────────── */}
            <section id="reviews-section" className="pt-10 pb-10 bg-white">
                <div className="max-w-[1200px] mx-auto px-8 md:px-16">
                    <div className="flex flex-col">
                        {pagedReviews.map((review, localIdx) => {
                            const globalIdx = (currentPage - 1) * REVIEWS_PER_PAGE + localIdx;
                            return <ReviewRow key={globalIdx} review={review} idx={globalIdx} />;
                        })}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-1 mt-8 md:mt-16 flex-wrap">
                        {/* Prev */}
                        <button
                            onClick={() => handlePage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="w-8 h-8 flex items-center justify-center font-sans font-extrabold text-[13px] cursor-pointer rounded-full transition-colors text-dark hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            &lsaquo;
                        </button>

                        {/* Page numbers */}
                        {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePage(page)}
                                className={`w-8 h-8 flex items-center justify-center font-sans font-extrabold text-[13px] cursor-pointer rounded-full transition-colors ${page === currentPage ? 'bg-primary text-white' : 'text-dark hover:bg-gray-100'}`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next */}
                        <button
                            onClick={() => handlePage(currentPage + 1)}
                            disabled={currentPage === TOTAL_PAGES}
                            className="w-8 h-8 flex items-center justify-center font-sans font-extrabold text-[13px] cursor-pointer rounded-full transition-colors text-dark hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            &rsaquo;
                        </button>
                    </div>

                    {/* Page indicator */}
                    <p className="text-center font-sans text-[12px] text-gray-400 mt-3">
                        Page {currentPage} of {TOTAL_PAGES} &mdash; {reviews.length} reviews
                    </p>
                </div>
            </section>

            {/* ─── 6. BOOKING CTA ──────────────────────────────────────────────── */}
            <BookingCTA />
            <CherryFinancing />

            <Footer />
        </main>
    );
}
