import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import CherryFinancing from '@/components/CherryFinancing';

export const dynamic = 'force-static';

interface ProcedureDetail {
    title: string;
    tagline: string;
    recoveryTime: string;
    heroImage: string;
    images: [string, string, string]; // 3 procedure-specific images
    overview: string;
    benefits: string[];
    candidateInfo: string;
    techniqueDescription: string;
    galleryHref: string;
    hasGallery: boolean;
}

type CategoryKey = 'medical-eye-care' | 'eyelid-surgery' | 'non-surgical' | 'injectables';

const SB = 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/learn-more';

const procedureData: Record<CategoryKey, Record<string, ProcedureDetail>> = {
    'medical-eye-care': {
        'cataract-surgery': {
            title: 'Cataract Surgery',
            tagline: 'Vision & Precision',
            recoveryTime: '4–6 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
            images: [
                `${SB}/medical-eye-care/cataract-surgery/cataract_1.svg`,
                `${SB}/medical-eye-care/cataract-surgery/cataract_2.svg`,
                `${SB}/medical-eye-care/cataract-surgery/cataract_3.svg`,
            ],
            overview: 'Cataract surgery is a safe, outpatient procedure that removes the eye\'s cloudy natural lens and replaces it with a clear artificial intraocular lens (IOL) to restore crisp, clear vision. Dr. Gordon uses the latest micro-incision techniques to minimize trauma and accelerate recovery. Most patients notice a dramatic improvement in vision within days of the procedure.',
            benefits: [
                'Restores clear, high-definition vision obscured by cataracts',
                'Outpatient procedure performed under local anesthesia',
                'Modern IOL options can reduce or eliminate the need for glasses',
                'Micro-incision technique means no stitches required in most cases',
                'Long-lasting results — artificial lenses do not develop cataracts',
            ],
            candidateInfo: 'You may be a good candidate for cataract surgery if you experience blurred or cloudy vision, increased sensitivity to glare and bright lights, difficulty with night driving, or fading of colors. A comprehensive evaluation with Dr. Gordon will confirm whether cataract surgery is appropriate for your specific stage of lens clouding and overall eye health.',
            techniqueDescription: 'Dr. Gordon performs phacoemulsification, a microsurgical technique in which ultrasonic energy gently breaks up the cloudy lens so it can be removed through a tiny incision. A foldable intraocular lens (IOL) is then inserted and unfolds to sit permanently within the natural lens capsule. The incision is self-sealing and typically requires no sutures.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'blepharoplasty': {
            title: 'Blepharoplasty',
            tagline: 'Vision & Precision',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
            images: [
                `${SB}/medical-eye-care/ptosis-repair/ptosis_1.svg`,
                `${SB}/medical-eye-care/ptosis-repair/ptosis_2.svg`,
                `${SB}/medical-eye-care/ptosis-repair/ptosis_3.svg`,
            ],
            overview: 'Blepharoplasty — commonly known as eyelid surgery — is a surgical procedure performed to reverse the effects of ptosis by restoring the full function of the eyelid and improving the patient\'s overall appearance. Dr. Gordon specializes in medically indicated blepharoplasty to remove excess skin that obstructs the visual field, as well as aesthetic refinements that create a more youthful and rested eye appearance.',
            benefits: [
                'Removes excess skin that blocks the upper field of vision',
                'Reduces heaviness and fatigue caused by drooping eyelids',
                'Creates a more alert and youthful eye contour',
                'Can be combined with ptosis repair for comprehensive eyelid correction',
                'Incisions are placed in natural eyelid creases for minimal visible scarring',
            ],
            candidateInfo: 'Ideal candidates are adults experiencing vision obstruction or significant cosmetic concern from upper eyelid skin laxity or lower eyelid puffiness. Good overall health, realistic expectations, and non-smoking status are key factors. A visual field test may be required for insurance purposes if functional impairment is present.',
            techniqueDescription: 'Excess skin and, where applicable, herniated orbital fat are carefully excised through incisions placed within the natural eyelid crease. Dr. Gordon precisely tailors the amount of tissue removed to preserve natural eyelid movement and contour. Sutures are removed within one week, and residual swelling typically resolves within two weeks.',
            galleryHref: '/gallery/blepharoplasty',
            hasGallery: true,
        },
        'ptosis-repair': {
            title: 'Ptosis Repair',
            tagline: 'Vision & Precision',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
            images: [
                `${SB}/medical-eye-care/ptosis-repair/ptosis_1.svg`,
                `${SB}/medical-eye-care/ptosis-repair/ptosis_2.svg`,
                `${SB}/medical-eye-care/ptosis-repair/ptosis_3.svg`,
            ],
            overview: 'Ptosis repair surgery tightens the upper eyelid to correct a drooping eyelid caused by a weakness or separation of the levator muscle. This condition can obstruct vision, cause a tired appearance, and create significant functional discomfort. Dr. Gordon is fellowship-trained in oculoplastic surgery, making him uniquely qualified to diagnose and surgically correct ptosis with precision and natural-looking results.',
            benefits: [
                'Corrects vision obstruction caused by a drooping upper eyelid',
                'Restores symmetry between both eyes',
                'Improves the rested, alert appearance of the eyes',
                'Performed as a brief outpatient procedure',
                'Durable, long-lasting correction',
            ],
            candidateInfo: 'Ptosis repair is appropriate for patients of any age — including children — who have a significantly drooping upper eyelid that obscures vision or causes a cosmetically bothersome appearance. Dr. Gordon conducts a thorough evaluation including visual field testing and eyelid measurements to determine the best surgical approach for each patient.',
            techniqueDescription: 'The most common technique involves a small incision within the upper eyelid crease through which the levator aponeurosis is tightened or reattached. In select cases, a posterior approach through the inside of the eyelid (Muller\'s muscle resection) may be used for patients with good levator function. The procedure is performed under local anesthesia with sedation as an outpatient.',
            galleryHref: '/gallery/ptosis-repair',
            hasGallery: true,
        },
        'ectropion-entropion-repair': {
            title: 'Ectropion and Entropion Repair',
            tagline: 'Vision & Precision',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
            images: [
                `${SB}/medical-eye-care/entropion-repair/ectropion_entropion-1.svg`,
                `${SB}/medical-eye-care/entropion-repair/ectropion_entropion-2.svg`,
                `${SB}/medical-eye-care/entropion-repair/ectropion_entropion-3.svg`,
            ],
            overview: 'Ectropion and entropion are conditions in which the lower eyelid turns outward or inward, respectively. Both conditions expose the cornea, lead to chronic irritation, and can cause significant damage to the eye surface if left untreated. Dr. Gordon restores proper eyelid positioning through targeted surgical repair, protecting your eye health and relieving discomfort.',
            benefits: [
                'Restores normal eyelid position to protect the cornea and eye surface',
                'Relieves chronic tearing, irritation, and redness',
                'Prevents corneal damage caused by exposure or eyelash abrasion',
                'Performed as a brief outpatient procedure',
                'Long-lasting correction with minimal scarring',
            ],
            candidateInfo: 'Patients experiencing an outward-turning lower eyelid (ectropion) with excessive tearing and eye irritation, or an inward-turning eyelid (entropion) causing lash contact with the eye, are candidates for surgical repair. These conditions are most common in older adults but can occur at any age due to scarring or prior surgery.',
            techniqueDescription: 'For ectropion, a lateral tarsal strip procedure tightens the lower eyelid tendons to restore normal outward position. For entropion, sutures or a small tissue excision are used to evert the eyelid margin and prevent the lashes from contacting the eye surface. Both procedures are performed under local anesthesia as outpatient surgery.',
            galleryHref: '/gallery/ectropion-entropion',
            hasGallery: true,
        },
        'dry-eye-management': {
            title: 'Dry Eye Management',
            tagline: 'Vision & Precision',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
            images: [
                `${SB}/medical-eye-care/dry-eye-management/dry-eye_1.svg`,
                `${SB}/medical-eye-care/dry-eye-management/dry-eye_2.svg`,
                `${SB}/medical-eye-care/dry-eye-management/dry-eye_3.svg`,
            ],
            overview: 'Dry eye disease occurs when the eyes do not produce sufficient or high-quality tears to maintain proper lubrication and clarity. Dr. Gordon takes a comprehensive approach to dry eye management, identifying the underlying cause and tailoring a treatment plan that may include prescription medications, in-office procedures, or lifestyle modifications to restore tear film stability and lasting comfort.',
            benefits: [
                'Relieves chronic eye irritation, burning, and foreign body sensation',
                'Improves tear film stability for clearer, more comfortable vision',
                'Customized treatment plans targeting the root cause of dryness',
                'Reduces dependency on over-the-counter lubricating drops',
                'Helps protect the ocular surface from long-term damage',
            ],
            candidateInfo: 'Patients experiencing persistent dryness, burning, fluctuating vision, or excessive reflex tearing are candidates for dry eye evaluation and treatment. Contributing factors include meibomian gland dysfunction, environmental exposures, contact lens wear, prior refractive surgery, and certain systemic medications.',
            techniqueDescription: 'Dr. Gordon evaluates tear production and quality using advanced diagnostic testing before recommending a personalized treatment plan. Options may include prescription anti-inflammatory eye drops (cyclosporine or lifitegrast), warm compresses and lid hygiene protocols, in-office meibomian gland expression, punctal plug placement to retain tears, or advanced therapies such as intense pulsed light (IPL).',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'stye-removal': {
            title: 'Stye Removal',
            tagline: 'Vision & Precision',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
            images: [
                `${SB}/medical-eye-care/stye-removal/stye_1.svg`,
                `${SB}/medical-eye-care/stye-removal/stye_2.svg`,
                `${SB}/medical-eye-care/stye-removal/stye_3.svg`,
            ],
            overview: 'A stye (hordeolum) is a painful, infected oil gland on the eyelid margin, while a chalazion is a chronic, painless cyst caused by a blocked meibomian gland. When conservative measures such as warm compresses fail to resolve the condition, Dr. Gordon performs a minor surgical procedure to drain or remove the lesion, providing rapid relief and preventing recurrence.',
            benefits: [
                'Provides rapid relief from eyelid pain, swelling, and redness',
                'Prevents the infection from spreading to surrounding tissues',
                'Quick in-office procedure performed under local anesthesia',
                'Minimal downtime with resolution of swelling within days',
                'Reduces risk of recurrence through complete removal',
            ],
            candidateInfo: 'Patients with a stye or chalazion that has not resolved after two to four weeks of warm compress therapy, or that is causing significant pain, vision disturbance, or cosmetic concern, are candidates for in-office drainage or excision.',
            techniqueDescription: 'The eyelid is numbed with a local anesthetic. For a chalazion, a small incision is made on the inner surface of the eyelid and the contents of the cyst are curetted. For an infected stye, the abscess is carefully drained. A brief pressure dressing is applied and the patient can return to normal activities the same day.',
            galleryHref: '/gallery',
            hasGallery: true,
        },
        'blepharospasm': {
            title: 'Treatment of Blepharospasm',
            tagline: 'Vision & Precision',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
            images: [
                `${SB}/medical-eye-care/blepharospasm/blepharospasm_1.svg`,
                `${SB}/medical-eye-care/blepharospasm/blepharospasm_2.svg`,
                `${SB}/medical-eye-care/blepharospasm/blepharospasm_3.svg`,
            ],
            overview: 'Blepharospasm is a neurological condition characterized by involuntary, forceful blinking or eyelid closure that can be debilitating and significantly impair daily function. Dr. Gordon has extensive experience managing blepharospasm with the most effective available treatments, restoring eyelid control and quality of life.',
            benefits: [
                'Dramatically reduces or eliminates involuntary eyelid spasms',
                'Restores functional vision and daily independence',
                'Non-surgical Botox injections provide reliable relief for most patients',
                'Treatment effects typically last three to four months',
                'Surgical options available for patients who do not respond to injections',
            ],
            candidateInfo: 'Patients diagnosed with essential blepharospasm or hemifacial spasm that causes frequent, disabling eyelid closure are candidates for treatment. Dr. Gordon will differentiate blepharospasm from other conditions causing similar symptoms and recommend the most appropriate therapeutic approach.',
            techniqueDescription: 'Botulinum toxin (Botox) injections are the first-line treatment, placed with precision into the orbicularis oculi muscle around the eye to reduce muscle activity and prevent spasms. Injections are performed in-office and take effect within three to seven days. For patients with refractory blepharospasm, surgical myectomy — partial removal of the orbicularis muscle — may be recommended.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'tumor-removal': {
            title: 'Tumor Removal and Reconstruction',
            tagline: 'Vision & Precision',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
            images: [
                `${SB}/medical-eye-care/eye-tumor/eye-tumor_1.svg`,
                `${SB}/medical-eye-care/eye-tumor/eye-tumor_2.svg`,
                `${SB}/medical-eye-care/eye-tumor/eye-tumor_3.svg`,
            ],
            overview: 'Eyelid and periorbital tumors — including basal cell carcinoma, squamous cell carcinoma, and benign lesions — require precise surgical removal combined with expert reconstruction to preserve both eye function and appearance. Dr. Gordon coordinates with Mohs surgeons and pathologists to ensure complete tumor clearance before performing aesthetic eyelid reconstruction.',
            benefits: [
                'Complete tumor removal with pathological confirmation of clear margins',
                'Eyelid function and eye protection maintained after reconstruction',
                'Expert oculoplastic reconstruction minimizes cosmetic impact',
                'Coordination with Mohs surgery team for malignant skin cancers',
                'Preserves natural eyelid architecture and appearance where possible',
            ],
            candidateInfo: 'Patients with a confirmed or suspected eyelid growth, suspicious lesion, or skin cancer near the eye are candidates for evaluation and surgical treatment. Early assessment is critical — most eyelid malignancies are highly curable when caught early and managed by a specialist.',
            techniqueDescription: 'Following tumor removal (often via Mohs micrographic surgery for skin cancers), Dr. Gordon performs individualized eyelid reconstruction using local tissue rearrangement, skin grafts, or flaps based on the size and location of the defect. Reconstruction is designed to restore the normal anatomy of the eyelid while achieving the most natural cosmetic result possible.',
            galleryHref: '/gallery/tumor-removal',
            hasGallery: true,
        },
        'routine-eye-exams': {
            title: 'Routine Eye Exams',
            tagline: 'Vision & Precision',
            recoveryTime: 'Same day',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
            images: [
                `${SB}/medical-eye-care/eye-routine-exam/eye-routine_1.svg`,
                `${SB}/medical-eye-care/eye-routine-exam/eye-routine_2.svg`,
                `${SB}/medical-eye-care/eye-routine-exam/eye-routine_3.svg`,
            ],
            overview: 'Comprehensive eye exams with Dr. Gordon go far beyond a vision test. These detailed evaluations assess the health of the entire eye — including the retina, optic nerve, lens, and eyelids — to detect diseases such as glaucoma, macular degeneration, and diabetic eye disease in their earliest, most treatable stages. Regular exams are essential to preserving long-term vision.',
            benefits: [
                'Early detection of sight-threatening conditions before symptoms appear',
                'Updated prescription for glasses or contact lenses',
                'Monitoring for age-related changes in vision and eye health',
                'Assessment of systemic diseases that manifest in the eye',
                'Personalized guidance on eye health and preventive care',
            ],
            candidateInfo: 'Annual comprehensive eye exams are recommended for all adults. Patients with diabetes, high blood pressure, a family history of glaucoma or macular degeneration, or anyone who has experienced changes in vision should be seen at least once per year or as directed by Dr. Gordon.',
            techniqueDescription: 'The exam includes visual acuity testing, refraction, tonometry to measure eye pressure, slit-lamp biomicroscopy to examine the anterior segment of the eye, and dilated fundus examination to inspect the retina and optic nerve. Additional imaging such as optical coherence tomography (OCT) may be performed as clinically indicated.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'orbital-fracture': {
            title: 'Orbital Fracture Evaluation',
            tagline: 'Vision & Precision',
            recoveryTime: '4–6 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
            images: [
                `${SB}/medical-eye-care/orbital-fracture/orbital_1.svg`,
                `${SB}/medical-eye-care/orbital-fracture/orbital_2.svg`,
                `${SB}/medical-eye-care/orbital-fracture/orbital_3.svg`,
            ],
            overview: 'An orbital fracture occurs when one or more of the bony walls surrounding the eye socket are broken, typically as a result of blunt facial trauma. Prompt evaluation by an oculoplastic specialist is critical to assess for entrapped muscles, vision changes, and enophthalmos (sunken eye). Dr. Gordon provides comprehensive orbital fracture assessment and, when indicated, surgical repair.',
            benefits: [
                'Accurate diagnosis using clinical examination and CT imaging',
                'Timely identification of entrapped orbital soft tissue requiring urgent repair',
                'Surgical repair to restore normal eye position and prevent double vision',
                'Collaboration with facial trauma and ENT surgeons as needed',
                'Long-term follow-up to monitor healing and functional recovery',
            ],
            candidateInfo: 'Any patient who has sustained blunt trauma to the face or eye area should be evaluated promptly. Key indications for surgical repair include restriction of eye movement causing diplopia (double vision), significant enophthalmos, and large fractures with herniation of orbital contents.',
            techniqueDescription: 'Orbital floor and medial wall fractures are repaired through a transconjunctival or subciliary incision that avoids visible facial scars. Entrapped orbital tissue is gently released and an implant — typically a thin titanium or porous polyethylene sheet — is placed to reconstruct the orbital floor and restore the normal volume and contour of the eye socket.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'thyroid-eye-disease': {
            title: 'Thyroid Eye Disease Management',
            tagline: 'Vision & Precision',
            recoveryTime: 'Ongoing',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
            images: [
                `${SB}/medical-eye-care/thyroid/thyroid_1.svg`,
                `${SB}/medical-eye-care/thyroid/thyroid_2.svg`,
                `${SB}/medical-eye-care/thyroid/thyroid_3.svg`,
            ],
            overview: 'Thyroid Eye Disease (TED), also known as Graves\' ophthalmopathy, is an inflammatory condition that causes the muscles and fat behind the eye to expand, pushing the eye forward (proptosis) and causing eyelid retraction, double vision, and in severe cases, vision loss. Dr. Gordon provides comprehensive management — from medical therapy during the active phase to surgical rehabilitation once the disease stabilizes.',
            benefits: [
                'Expert monitoring to detect and prevent vision-threatening complications',
                'Medical management to suppress active orbital inflammation',
                'Surgical decompression to relieve pressure on the optic nerve',
                'Strabismus surgery to correct persistent double vision',
                'Eyelid surgery to address retraction and exposure',
            ],
            candidateInfo: 'Patients with a known or suspected thyroid disorder who develop eye symptoms — including eye protrusion, double vision, light sensitivity, eyelid swelling, or difficulty closing the eyes — should seek prompt evaluation. Close collaboration between Dr. Gordon and an endocrinologist ensures optimal management of both the thyroid disease and its ocular manifestations.',
            techniqueDescription: 'In the active inflammatory phase, treatment may include systemic steroids, radiation therapy, or Teprotumumab (Tepezza), the first FDA-approved treatment specifically for TED. Once the disease has been inactive for at least six months, rehabilitative surgery is performed in a staged sequence: orbital decompression first, followed by strabismus surgery if needed, and then eyelid surgery as the final step.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
    },
    'eyelid-surgery': {
        'upper-lower-blepharoplasty': {
            title: 'Upper and Lower Eyelid Blepharoplasty',
            tagline: 'Surgical Artistry',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/eyelid-surgery.png',
            images: [
                `${SB}/aesthetic-services/upper-and-lower-eyelid-blepharoplasty/bleph_1.svg`,
                `${SB}/aesthetic-services/upper-and-lower-eyelid-blepharoplasty/bleph_2.svg`,
                `${SB}/aesthetic-services/upper-and-lower-eyelid-blepharoplasty/bleph_3.svg`,
            ],
            overview: 'Upper and lower eyelid blepharoplasty removes or repositions excess skin and fat from the eyelids to improve vision obstruction and create a more youthful, rested eye appearance. Dr. Gordon\'s precision approach ensures results that look naturally refreshed — never overdone — with careful attention to maintaining the unique characteristics of each patient\'s eyes.',
            benefits: [
                'Removes skin folds that obstruct the upper visual field',
                'Reduces under-eye puffiness and fat herniation',
                'Creates a more alert, youthful eye appearance',
                'Incisions hidden within natural eyelid creases',
                'Can be combined with other procedures for comprehensive rejuvenation',
            ],
            candidateInfo: 'Good candidates are adults with excess upper eyelid skin causing visual impairment or cosmetic concern, and those with significant lower eyelid fat pads or skin laxity causing a tired appearance. Non-smokers in good general health with realistic expectations are ideal. A visual field test may be needed for insurance coverage of functional upper blepharoplasty.',
            techniqueDescription: 'Upper blepharoplasty incisions are made within the natural eyelid crease; excess skin and, when present, herniated orbital fat are precisely excised. Lower blepharoplasty may be performed through a transconjunctival (inside the eyelid) or subciliary (below the lash line) approach depending on whether skin removal is needed. Both procedures are performed under local anesthesia with sedation as outpatient surgery.',
            galleryHref: '/gallery/bleph-and-ptosis',
            hasGallery: true,
        },
        'revision-blepharoplasty': {
            title: 'Revision Blepharoplasty',
            tagline: 'Surgical Artistry',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/eyelid-surgery.png',
            images: [
                `${SB}/aesthetic-services/revision-of-blepharoplasty/revision_1.svg`,
                `${SB}/aesthetic-services/revision-of-blepharoplasty/revision_2.svg`,
                `${SB}/aesthetic-services/revision-of-blepharoplasty/revision_3.svg`,
            ],
            overview: 'Revision blepharoplasty is performed to correct unsatisfactory results from a previous eyelid surgery. Common concerns include asymmetry, over-correction, under-correction, dry eye from too much skin removal, or visible scarring. Dr. Gordon\'s expertise in complex eyelid reconstruction makes him uniquely equipped to address these challenging cases and restore both function and aesthetics.',
            benefits: [
                'Corrects asymmetry between the two eyes after prior surgery',
                'Addresses over-correction or under-correction from previous blepharoplasty',
                'Restores comfortable eye closure if excessive skin was removed',
                'Improves or repositions unfavorable scarring',
                'Customized approach based on each patient\'s unique anatomy and concerns',
            ],
            candidateInfo: 'Patients who have had prior eyelid surgery and are dissatisfied with their results — whether due to functional concerns such as dry eye or inability to close the eyes, or aesthetic concerns such as asymmetry or unnatural appearance — are candidates for revision consultation with Dr. Gordon. A detailed evaluation of the original surgical changes and current anatomy guides the revision plan.',
            techniqueDescription: 'Revision blepharoplasty is highly individualized. Techniques may include releasing scar tissue, repositioning the eyelid crease, adding volume through fat transfer, placing a skin or mucosal graft to restore lost tissue, or carefully adjusting the levator muscle. The specific approach is determined after thorough evaluation of the prior surgery and the patient\'s current anatomy.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'aesthetic-ptosis-repair': {
            title: 'Aesthetic Ptosis Repair',
            tagline: 'Surgical Artistry',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/eyelid-surgery.png',
            images: [
                `${SB}/aesthetic-services/aesthetic-ptosis/aesthetic-ptosis_1.svg`,
                `${SB}/aesthetic-services/aesthetic-ptosis/aesthetic-ptosis_2.svg`,
                `${SB}/aesthetic-services/aesthetic-ptosis/aesthetic-ptosis_3.svg`,
            ],
            overview: 'Aesthetic ptosis repair lifts a drooping upper eyelid to improve eye symmetry and create a more alert, wide-eyed appearance. Unlike medically necessary ptosis repair, aesthetic ptosis repair is motivated by cosmetic goals. Dr. Gordon approaches each case with an artist\'s eye, ensuring the elevated eyelid position looks natural and harmonizes with the patient\'s facial features.',
            benefits: [
                'Restores symmetry between the two eyelids',
                'Creates a more open, alert, and youthful eye appearance',
                'Subtle lift that enhances without looking operated',
                'Can address unilateral (one eye) or bilateral (both eyes) ptosis',
                'Long-lasting results with precise levator muscle adjustment',
            ],
            candidateInfo: 'Candidates are adults who have noticeable drooping of one or both upper eyelids that affects their confidence or facial symmetry, even when the droop is not severe enough to impair vision. Good health and realistic expectations are essential. The evaluation includes careful eyelid measurements and assessment of levator muscle function.',
            techniqueDescription: 'Through an incision placed in the natural upper eyelid crease, the levator aponeurosis is identified, tightened, and sutured at the ideal height and contour. The procedure is often performed with the patient awake so that eyelid height can be adjusted in real time. Fine absorbable sutures close the incision, leaving a scar hidden within the natural crease.',
            galleryHref: '/gallery/ptosis-repair',
            hasGallery: true,
        },
        'brow-lift': {
            title: 'Brow Lift',
            tagline: 'Surgical Artistry',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/eyelid-surgery.png',
            images: [
                `${SB}/aesthetic-services/brow-lift/brow-lift-1.svg`,
                `${SB}/aesthetic-services/brow-lift/brow-lift-2.svg`,
                `${SB}/aesthetic-services/brow-lift/brow-lift-3.svg`,
            ],
            overview: 'A brow lift (forehead lift) elevates a descended brow to reduce forehead lines, soften a furrowed appearance, and restore a more open, youthful eye area. A low or heavy brow can make the eyes appear smaller and contribute to eyelid fullness even when the eyelids themselves are normal. Dr. Gordon uses the most appropriate technique for each patient\'s anatomy to achieve natural, long-lasting elevation.',
            benefits: [
                'Elevates a descended brow to a naturally youthful position',
                'Reduces horizontal forehead lines and glabellar furrows',
                'Opens the eye area by relieving brow-related eyelid heaviness',
                'Creates a more refreshed, alert facial expression',
                'Can be combined with upper blepharoplasty for comprehensive rejuvenation',
            ],
            candidateInfo: 'Ideal candidates are adults with brow ptosis (descended brow position) that contributes to a tired or heavy-lidded appearance. Patients considering upper blepharoplasty who have a low brow should first address the brow position, as performing eyelid surgery alone on a low brow may worsen the brow position. A thorough evaluation guides the recommendation.',
            techniqueDescription: 'Dr. Gordon performs endoscopic or temporal brow lift depending on the degree of lifting required and the patient\'s hairline. The endoscopic technique uses small incisions hidden in the scalp, through which a camera guides the elevation and fixation of the brow tissue. The temporal brow lift targets the outer brow and is ideal for patients requiring more lateral elevation.',
            galleryHref: '/gallery',
            hasGallery: true,
        },
        'festoon-treatment': {
            title: 'Festoon Treatment',
            tagline: 'Surgical Artistry',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/eyelid-surgery.png',
            images: [
                `${SB}/aesthetic-services/festoon-treatment/festoon-1.svg`,
                `${SB}/aesthetic-services/festoon-treatment/festoon-2.svg`,
                `${SB}/aesthetic-services/festoon-treatment/festoon-3.svg`,
            ],
            overview: 'Festoons are mounds of swollen, lax skin that appear on the upper cheek and lower eyelid, creating a persistent puffy appearance that does not improve with rest or cold compresses. Unlike ordinary under-eye bags, festoons involve the cheek skin and often contain a pocket of fluid. Dr. Gordon offers Surgical and Non-Surgical approaches such as radio frequency and laser treatments to achieve lasting improvement.',
            benefits: [
                'Eliminates persistent lower eyelid and cheek mounds',
                'Restores a smoother, more contoured under-eye and cheek transition',
                'Addresses fluid accumulation and skin laxity simultaneously',
                'Dramatic improvement not achievable with fillers or injectables alone',
                'Long-lasting results when combined with lifestyle modifications',
            ],
            candidateInfo: 'Candidates are patients who have persistent, swollen mounds beneath the eyes and across the upper cheek that are constant rather than fluctuating. Festoons are often worsened by sun exposure, smoking, and fluid retention. Patients should be in good health, non-smokers, and willing to follow post-operative care instructions to optimize healing.',
            techniqueDescription: 'Surgical treatment involves a lower eyelid approach combined with mid-face tissue repositioning and excision of redundant skin and muscle. In select cases, CO2 laser resurfacing of the festoon area promotes skin tightening and addresses dermal laxity. The combination of surgical lifting and laser resurfacing often provides the most comprehensive improvement.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'double-eyelid-surgery': {
            title: 'Double Eyelid Surgery',
            tagline: 'Surgical Artistry',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/eyelid-surgery.png',
            images: [
                `${SB}/aesthetic-services/double-eyelid/double-eyelid-1.svg`,
                `${SB}/aesthetic-services/double-eyelid/double-eyelid-2.svg`,
                `${SB}/aesthetic-services/double-eyelid/double-eyelid-3.svg`,
            ],
            overview: 'Double eyelid surgery (Asian blepharoplasty) creates a defined supratarsal crease in the upper eyelid for patients who have a single eyelid or indistinct crease. This procedure enhances the eye shape, makes the eyes appear larger and more defined, and can be tailored to preserve natural ethnic characteristics. Dr. Gordon takes a culturally sensitive approach, respecting each patient\'s aesthetic goals.',
            benefits: [
                'Creates a natural-looking upper eyelid crease',
                'Makes the eyes appear more open and defined',
                'Highly customizable crease height and shape',
                'Preserves the natural appearance and ethnic identity of the eye',
                'Can be performed via suture technique (less invasive) or incision method',
            ],
            candidateInfo: 'Candidates are adults — most often of East or Southeast Asian descent — who wish to create or define an upper eyelid crease. Both suture and incision techniques are available, and the choice depends on eyelid anatomy, desired crease height, and whether excess fat or skin removal is also needed. A detailed consultation ensures the approach matches individual goals.',
            techniqueDescription: 'The suture technique involves placing small sutures that connect the skin to the underlying tarsal plate to create a crease, with minimal incisions and faster recovery. The full-incision method removes a precise amount of skin and fat before establishing the crease and offers more permanent and controllable results. Dr. Gordon determines the optimal technique based on the patient\'s anatomy and goals.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'canthoplasty-canthopexy': {
            title: 'Canthoplasty and Canthopexy',
            tagline: 'Surgical Artistry',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/eyelid-surgery.png',
            images: [
                `${SB}/aesthetic-services/canthoplasty/canthoplasty-1.svg`,
                `${SB}/aesthetic-services/canthoplasty/canthoplasty-2.svg`,
                `${SB}/aesthetic-services/canthoplasty/canthoplasty-3.svg`,
            ],
            overview: 'Canthoplasty and canthopexy are procedures that tighten or reshape the outer corner (lateral canthus) of the eyelids. Canthopexy reinforces the eyelid\'s lateral support without cutting the tendon, while canthoplasty involves a more significant reconstruction of the lateral canthal tendon. Both procedures address eyelid laxity, reshape the eye opening, and are often combined with blepharoplasty.',
            benefits: [
                'Corrects lower eyelid laxity and scleral show',
                'Prevents or corrects lower eyelid malposition after blepharoplasty',
                'Reshapes the outer corner to achieve an almond-eye or cat-eye aesthetic',
                'Strengthens eyelid support for lasting functional and cosmetic results',
                'Minimally invasive canthopexy has a short recovery time',
            ],
            candidateInfo: 'Patients with lower eyelid laxity, visible white below the iris (scleral show), a rounded or sagging outer corner, or those undergoing lower blepharoplasty who need additional eyelid support are candidates. A canthoplasty or canthopexy may also be appropriate for patients seeking to achieve a specific eye shape such as an upswept lateral canthus.',
            techniqueDescription: 'In canthopexy, a permanent suture is passed through the lateral canthal tendon and anchored to the orbital rim periosteum, providing improved support without detaching the tendon. In canthoplasty, the lateral canthal tendon is detached, resected to remove laxity, and reattached to the orbital rim at the desired position and tension, fully reconstructing the lateral canthus.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'eyelid-fat-transfer': {
            title: 'Eyelid Fat Transfer or Removal',
            tagline: 'Surgical Artistry',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/eyelid-surgery.png',
            images: [
                `${SB}/aesthetic-services/fat-removable/fat-1.svg`,
                `${SB}/aesthetic-services/fat-removable/fat-2.svg`,
                `${SB}/aesthetic-services/fat-removable/fat-3.svg`,
            ],
            overview: 'Eyelid fat procedures address volume imbalances around the eyes — whether excess fat causing puffiness or volume loss causing hollowness. Fat removal (blepharoplasty) excises or repositions herniated orbital fat to reduce under-eye bags, while fat transfer harvests fat from another body site and injects it into hollow areas to restore a smooth, youthful contour.',
            benefits: [
                'Removes puffiness caused by herniated orbital fat',
                'Restores volume to hollow under-eye areas and tear troughs',
                'Fat transfer uses the patient\'s own natural tissue for lasting results',
                'Can be combined with blepharoplasty or other eyelid procedures',
                'Addresses the full spectrum of eyelid volume concerns',
            ],
            candidateInfo: 'Patients with prominent under-eye bags caused by fat protrusion, or those with a hollow, sunken appearance beneath the eyes or in the upper eyelid sulcus, are candidates for fat procedures. The choice between removal and transfer depends on the patient\'s anatomy and goals. Fat transfer is not suitable for patients with very thin skin or active inflammatory skin conditions.',
            techniqueDescription: 'For fat removal, herniated orbital fat compartments are accessed through a transconjunctival incision (inside the eyelid, leaving no visible scar) and precisely excised or repositioned to create a smooth contour. For fat transfer, a small volume of fat is harvested from the abdomen or thigh using a fine cannula, processed, and injected with micro-droplet technique into the targeted area around the eye.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
    },
    'non-surgical': {
        '5d-eyebag-removal': {
            title: '5D Eye Bag Removal',
            tagline: 'Minimal Downtime',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',
            images: [
                `${SB}/non-surgical-rejuvenation/5d-eyebag-removal/eyebag-removal_1.svg`,
                `${SB}/non-surgical-rejuvenation/5d-eyebag-removal/eyebag-removal_2.svg`,
                `${SB}/non-surgical-rejuvenation/5d-eyebag-removal/eyebag-removal_3.svg`,
            ],
            overview: '5D Eye Bag Removal is Dr. Gordon\'s advanced non-surgical protocol that combines multiple energy-based technologies to tighten skin, reduce orbital fat, and improve the overall appearance of under-eye puffiness and sagging without surgery. The "5D" approach targets all five dimensions of under-eye aging for comprehensive improvement.',
            benefits: [
                'Non-surgical approach with no incisions or general anesthesia',
                'Addresses multiple causes of under-eye bags in one treatment session',
                'Tightens skin and stimulates collagen for progressive improvement',
                'Minimal downtime compared to surgical blepharoplasty',
                'Significant reduction in puffiness and shadowing under the eyes',
            ],
            candidateInfo: 'Ideal for patients with mild to moderate under-eye puffiness who prefer a non-surgical approach or who are not ready for eyelid surgery. Results are best in patients with good skin elasticity. Those with severe fat herniation or significant skin excess may ultimately benefit more from surgical correction.',
            techniqueDescription: 'The 5D protocol combines radiofrequency energy, ultrasound, microneedling, and targeted topical agents to contract and tighten the skin around the eye, reduce fat volume through lipolysis, and stimulate new collagen formation. Treatments are performed as a series of sessions spaced several weeks apart to allow tissue remodeling between visits.',
            galleryHref: '/gallery/5d-eyebag-removal',
            hasGallery: true,
        },
        '5d-face-lift': {
            title: '5D Face Lift',
            tagline: 'Minimal Downtime',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',
            images: [
                `${SB}/non-surgical-rejuvenation/5d-eye-lift/eyelift_1.svg`,
                'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/non-surgical-rejuvenation/5D%20Facelift%20(3).webp',
                'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/non-surgical-rejuvenation/5D%20Facelift%20(5).webp',
            ],
            overview: 'The 5D Facelift is a non-surgical facial rejuvenation treatment that combines advanced RF (Radiofrequency), laser, and skin-tightening technologies to lift, contour, and refresh the face naturally without surgery or significant downtime.',
            benefits: [
                'Lifts and tightens sagging facial skin',
                'Improves jawline and facial contour definition',
                'Softens fine lines and wrinkles',
                'Stimulates natural collagen production for long-term rejuvenation',
                'Enhances skin texture, tone, and firmness',
                'No incisions, stitches, or general anesthesia required',
            ],
            candidateInfo: '• Individuals with mild to moderate facial skin laxity\n• Patients seeking facial rejuvenation without surgery\n• Those wanting a more refreshed, lifted appearance with minimal downtime\n• Patients looking to improve skin quality and contour naturally',
            techniqueDescription: '• Customized technologies are used to target skin laxity, volume loss, and texture concerns.\n• Mild redness or swelling may occur for a few days.\n• Skin gradually appears firmer, smoother, and more lifted over several weeks.\n• Results continue to improve as collagen production increases.',
            galleryHref: '/gallery/5d-face-lift',
            hasGallery: true,
        },
        'mini-mid-facelift': {
            title: 'Mini & Mid Face Lift',
            tagline: 'Minimal Downtime',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',
            images: [
                `${SB}/non-surgical-rejuvenation/face-lift/face-lift_1.svg`,
                `${SB}/non-surgical-rejuvenation/face-lift/face-lift_2.svg`,
                `${SB}/non-surgical-rejuvenation/face-lift/face-lift_3.svg`,
            ],
            overview: 'Mini and mid face lift procedures address sagging in the cheek and mid-face area to restore youthful volume, definition, and contour. These less invasive alternatives to full facelift surgery provide meaningful rejuvenation with smaller incisions, shorter recovery, and targeted improvement in the areas that matter most — the cheeks, nasolabial folds, and jowls.',
            benefits: [
                'Lifts sagging cheek and mid-face tissues',
                'Reduces nasolabial folds and early jowling',
                'Smaller incisions and shorter recovery than full facelift',
                'Natural-looking improvement without a pulled appearance',
                'Can be combined with eyelid surgery for comprehensive facial rejuvenation',
            ],
            candidateInfo: 'Ideal candidates are adults in their 40s and 50s with early to moderate mid-face descent, nasolabial fold deepening, or early jowl formation who are not yet ready for a full lower facelift. Good skin quality and general health, combined with realistic expectations, are key criteria for successful outcomes.',
            techniqueDescription: 'The mini face lift uses small incisions around the ear to lift and tighten the superficial musculoaponeurotic system (SMAS), providing natural repositioning of sagging tissue. The mid face lift specifically targets the descent of the malar fat pad to restore the natural cheek convexity. Both procedures can be performed under local anesthesia with sedation.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'laser-skin-resurfacing': {
            title: 'Laser Skin Resurfacing',
            tagline: 'Minimal Downtime',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',
            images: [
                `${SB}/non-surgical-rejuvenation/laser-skin-resurfacing/resurfacing_1.svg`,
                `${SB}/non-surgical-rejuvenation/laser-skin-resurfacing/resurfacing_2.svg`,
                `${SB}/non-surgical-rejuvenation/laser-skin-resurfacing/resurfacing_3.svg`,
            ],
            overview: 'Laser skin resurfacing uses targeted laser energy to remove damaged outer layers of skin, stimulate robust collagen production, and achieve significant improvement in skin texture, tone, pigmentation, and fine lines. Dr. Gordon uses fractional CO2 and Erbium laser platforms for resurfacing around the eye and face, delivering precise treatment with predictable results.',
            benefits: [
                'Significantly improves fine lines, wrinkles, and skin texture',
                'Treats sun damage, pigmentation irregularities, and age spots',
                'Stimulates collagen production for long-term skin tightening',
                'Particularly effective for crow\'s feet and lower eyelid skin',
                'Results continue to improve for several months post-treatment',
            ],
            candidateInfo: 'Best candidates have mild to moderate skin laxity, sun damage, or surface texture concerns. Patients with darker skin tones require careful evaluation to minimize pigmentation risks. Active acne, cold sore history, or use of certain retinoid medications may affect treatment timing. A thorough consultation and skin evaluation guides the appropriate laser selection and settings.',
            techniqueDescription: 'Fractional CO2 laser creates a matrix of micro-treatment zones in the skin, leaving surrounding tissue intact to accelerate healing and collagen remodeling. Erbium laser provides more superficial resurfacing with quicker recovery and is ideal for fine-surface improvements. Treatment settings are customized for the periocular area, where skin is thinnest and most delicate.',
            galleryHref: '/gallery/laser-skin-resurfacing',
            hasGallery: true,
        },
        'pdo-thread-lift': {
            title: 'PDO Thread Lift for Skin Tightening',
            tagline: 'Minimal Downtime',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',
            images: [
                `${SB}/non-surgical-rejuvenation/pdo-thread-lift/pdo_1.svg`,
                `${SB}/non-surgical-rejuvenation/pdo-thread-lift/pdo_2.svg`,
                `${SB}/non-surgical-rejuvenation/pdo-thread-lift/pdo_3.svg`,
            ],
            overview: 'PDO (polydioxanone) thread lift is a minimally invasive procedure that uses biodegradable sutures placed beneath the skin to lift sagging tissue and stimulate collagen production. As the threads dissolve over several months, they leave behind a framework of new collagen that maintains the lift and improves skin quality long after the threads themselves are gone.',
            benefits: [
                'Immediate lifting effect with progressive collagen stimulation',
                'Biodegradable threads dissolve naturally over 6–12 months',
                'Minimal downtime — most patients return to activities within days',
                'Can be used in multiple facial areas including the brow, cheek, and jowl',
                'Suitable as a standalone treatment or to complement injectables',
            ],
            candidateInfo: 'Ideal for patients with mild to moderate skin sagging who want a visible lift without surgery. Best results are seen in patients with good baseline skin quality and moderate tissue laxity. Those with severe sagging or very thin skin may not achieve satisfactory improvement and should consider surgical options.',
            techniqueDescription: 'Under local anesthesia, fine cannulas are used to insert PDO threads in a precise pattern beneath the skin in the targeted area. Barbed threads anchor to the tissue and are drawn taut to create an immediate lift. Smooth threads are used in areas requiring collagen stimulation rather than mechanical lifting. The entire procedure takes approximately 30 to 60 minutes.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'rf-microneedling': {
            title: 'RF Microneedling',
            tagline: 'Minimal Downtime',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',
            images: [
                `${SB}/non-surgical-rejuvenation/rf-microneedling-for-contouring-tightening-and-lifting/rf_1.svg`,
                `${SB}/non-surgical-rejuvenation/rf-microneedling-for-contouring-tightening-and-lifting/rf_2.svg`,
                `${SB}/non-surgical-rejuvenation/rf-microneedling-for-contouring-tightening-and-lifting/rf_3.svg`,
            ],
            overview: 'RF microneedling combines the collagen-inducing effects of traditional microneedling with the tissue-tightening power of radiofrequency energy. Fine insulated needles deliver RF energy precisely into the dermis at controlled depths, creating controlled thermal zones that trigger significant collagen and elastin remodeling for firmer, tighter, more contoured skin.',
            benefits: [
                'Tightens and lifts skin through deep collagen remodeling',
                'Improves skin texture, pore size, and overall skin quality',
                'Effective for mild to moderate jowling and skin laxity',
                'Safe for all skin types with minimal risk of pigmentation changes',
                'Progressive improvement over three to six months after treatment',
            ],
            candidateInfo: 'RF microneedling is suitable for patients across a wide range of skin types with concerns about skin laxity, texture irregularities, large pores, or early jowling. It is an excellent option for patients seeking more significant tightening than standard microneedling but who are not ready for surgical intervention. Active acne or skin infections in the treatment area are temporary contraindications.',
            techniqueDescription: 'A topical numbing cream is applied before treatment. The RF microneedling device delivers energy through an array of precisely controlled needles at adjustable depths (0.5–4mm), targeting the dermis where collagen and elastin fibers reside. Energy delivery settings are customized for each patient and treatment area. A series of three to four treatments spaced four to six weeks apart is typically recommended.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'jowl-chin-reduction': {
            title: 'Jowl and Double Chin Reduction',
            tagline: 'Minimal Downtime',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',
            images: [
                `${SB}/non-surgical-rejuvenation/jowls-and-double-chin/jowls---double-chin_1.svg`,
                `${SB}/non-surgical-rejuvenation/jowls-and-double-chin/jowls---double-chin_2.svg`,
                `${SB}/non-surgical-rejuvenation/jowls-and-double-chin/jowls---double-chin_3.svg`,
            ],
            overview: 'Jowl and double chin reduction targets the excess fat and skin laxity along the jawline and under the chin that blur facial definition and create a heavier, older-looking profile. Using non-surgical energy-based technologies and targeted fat reduction techniques, Dr. Gordon can meaningfully improve jawline contour without the recovery of surgical lifting or liposuction.',
            benefits: [
                'Reduces submental fat (double chin) and jowl definition',
                'Sharpens the jawline and improves the neck-chin angle',
                'Non-surgical options include targeted fat reduction and skin tightening',
                'Minimal to no downtime depending on technique used',
                'Can be combined with injectable neuromodulators for additional contouring',
            ],
            candidateInfo: 'Best suited for patients with mild to moderate submental fat, early jowling, or blunted jawline definition who are not seeking surgical intervention. Patients must have good skin elasticity for optimal skin tightening results following fat reduction. Those with significant tissue excess may ultimately need a neck lift or lower face lift for the most complete improvement.',
            techniqueDescription: 'Non-surgical fat reduction options include deoxycholic acid (Kybella) injections, which chemically destroy fat cells beneath the chin, and RF-based body contouring devices that deliver heat to liquefy and reduce fat while tightening skin simultaneously. Treatments are often combined with RF microneedling or PDO threads for enhanced skin tightening along the jawline.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'prp-therapy': {
            title: 'PRP (Platelet-Rich Plasma) Therapy',
            tagline: 'Minimal Downtime',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',
            images: [
                `${SB}/non-surgical-rejuvenation/prp-theraphy/prp_1.svg`,
                `${SB}/non-surgical-rejuvenation/prp-theraphy/prp_2.svg`,
                `${SB}/non-surgical-rejuvenation/prp-theraphy/prp_3.svg`,
            ],
            overview: 'PRP therapy harnesses the body\'s own healing potential by concentrating growth factors from the patient\'s blood and reintroducing them into areas requiring tissue repair and rejuvenation. The high concentration of platelets stimulates collagen production, accelerates tissue regeneration, and improves skin quality in a completely natural way.',
            benefits: [
                'Uses the patient\'s own blood — no synthetic materials or allergens',
                'Stimulates natural collagen and elastin production',
                'Improves skin texture, tone, and overall quality',
                'Can be combined with microneedling for enhanced penetration',
                'Accelerates healing after laser or surgical procedures',
            ],
            candidateInfo: 'PRP therapy is appropriate for patients seeking gradual, natural-looking skin improvement, and for those who have undergone other aesthetic procedures and wish to accelerate healing. It can be used across multiple facial areas including under the eyes, cheeks, and along the jawline. Patients taking blood thinners or with clotting disorders should discuss this with Dr. Gordon prior to treatment.',
            techniqueDescription: 'A small blood sample is drawn from the patient and placed in a centrifuge to separate the platelet-rich plasma from other blood components. The concentrated PRP is then applied to the treatment area through micro-injections or combined with microneedling for deeper dermal penetration. The procedure is performed in-office with topical anesthetic and takes approximately 45 minutes.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'drop-n-lift': {
            title: "Drop N' Lift & Upneeq",
            tagline: 'Minimal Downtime',
            recoveryTime: 'No downtime',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',
            images: [
                `${SB}/non-surgical-rejuvenation/upneeq/upneeq_1.svg`,
                `${SB}/non-surgical-rejuvenation/upneeq/upneeq_2.svg`,
                `${SB}/non-surgical-rejuvenation/upneeq/upneeq_3.svg`,
            ],
            overview: "Drop N' Lift is Dr. Gordon's exclusive method that uses prescription eye drops — including Upneeq (oxymetazoline hydrochloride ophthalmic solution) — to create an immediate, visible eye lift without surgery or injectables. This innovative non-invasive approach is ideal for patients seeking a quick, effective enhancement before an important event or as a daily lift solution.",
            benefits: [
                'Immediate visible lift of the upper eyelid within 15 minutes',
                'No injections, no incisions, and zero downtime',
                'FDA-approved Upneeq drops are safe for daily use',
                'Ideal for special occasions or as a non-surgical maintenance option',
                "Proprietary Drop N' Lift technique maximizes the lifting effect",
            ],
            candidateInfo: "Suitable for adults with mild to moderate upper eyelid ptosis who want a non-surgical solution, or those seeking a temporary lift before an event. Upneeq is FDA-approved for acquired blepharoptosis and is safe for most patients. Contraindications include certain cardiovascular conditions and narrow-angle glaucoma, which Dr. Gordon will screen for at your consultation.",
            techniqueDescription: "Dr. Gordon's Drop N' Lift protocol involves a precisely timed application of Upneeq eye drops combined with adjunctive topical agents to maximize Mueller's muscle stimulation, achieving a lift of one to two millimeters in eyelid height. Patients are typically able to see the effect within 15 minutes of application. A personalized dosing schedule and usage guide is provided to each patient.",
            galleryHref: '/gallery/drop-n-lift',
            hasGallery: true,
        },
    },
    'injectables': {
        'tear-trough-filler': {
            title: 'Tear Trough Filler for Under-Eye Hollows',
            tagline: 'Natural Results',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/Injectables-2.webp',
            images: [
                `${SB}/injectables/tear-trough/tear-trough_1.svg`,
                `${SB}/injectables/tear-trough/tear-trough_2.svg`,
                `${SB}/injectables/tear-trough/tear-trough_3.svg`,
            ],
            overview: 'Tear trough filler restores volume beneath the eyes to reduce the appearance of hollowness, dark shadows, and the tired look caused by volume loss in the tear trough groove. Using carefully selected hyaluronic acid fillers placed with a fine cannula technique, Dr. Gordon achieves natural-looking refreshment of the under-eye area without surgery.',
            benefits: [
                'Reduces hollowness and dark shadows under the eyes',
                'Restores volume lost with age for a more rested appearance',
                'Cannula technique minimizes bruising and swelling',
                'Results are immediate and can last 12–18 months',
                'Reversible with hyaluronidase if correction is needed',
            ],
            candidateInfo: 'Ideal candidates have noticeable under-eye hollowing (tear trough deformity) rather than under-eye bags caused by fat herniation. Patients with significant fat herniation are better served by surgical blepharoplasty. A thorough assessment distinguishes between hollow tear troughs and bag-related puffiness to ensure the most appropriate treatment.',
            techniqueDescription: 'A fine cannula is used to deliver micro-aliquots of hyaluronic acid filler into the suborbicularis oculi fat (SOOF) plane and along the tear trough groove. The cannula technique reduces the risk of bruising, vascular occlusion, and irregularity compared to sharp needles. Precise layering achieves a smooth, natural contour without the telltale swollen appearance of incorrectly placed filler.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'botox': {
            title: 'Neuromodulators and Dermal Fillers',
            tagline: 'Natural Results',
            recoveryTime: 'No downtime',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/Injectables-2.webp',
            images: [
                `${SB}/injectables/botox/botox_1.svg`,
                `${SB}/injectables/botox/botox_2.svg`,
                `${SB}/injectables/botox/botox_3.svg`,
            ],
            overview: 'BOTOX (onabotulinumtoxinA) is the world\'s most popular non-surgical cosmetic treatment, using purified botulinum toxin to temporarily relax targeted facial muscles and reduce the appearance of expression lines. Dr. Gordon applies BOTOX with medical precision, achieving smooth, natural results that maintain expressiveness while significantly softening wrinkles.',
            benefits: [
                'Softens forehead lines, crow\'s feet, and glabellar furrows',
                'Provides a subtle brow lift by relaxing brow depressor muscles',
                'Quick, in-office treatment with no downtime',
                'Results visible within 3–5 days, lasting 3–4 months',
                'Regular treatments can provide long-term muscle relaxation',
            ],
            candidateInfo: 'BOTOX is appropriate for adults with dynamic wrinkles (lines caused by facial expression) who want a non-surgical option for facial rejuvenation. It is not effective for static wrinkles that are present at rest or for volume loss, which are better addressed with fillers. Pregnant or nursing women and patients with certain neuromuscular disorders should avoid treatment.',
            techniqueDescription: 'After a consultation to map the targeted muscles, BOTOX is injected with a fine needle into precise points in the orbicularis oculi, frontalis, procerus, and corrugator muscles. The entire treatment takes 10 to 15 minutes. Dr. Gordon customizes dosing for each patient\'s muscle mass and desired effect, ensuring natural movement is maintained throughout.',
            galleryHref: '/gallery/botox',
            hasGallery: true,
        },
        'dysport': {
            title: 'Dysport for Dynamic Wrinkles',
            tagline: 'Natural Results',
            recoveryTime: 'No downtime',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/Injectables-2.webp',
            images: [
                `${SB}/injectables/dysport/dysport-1.svg`,
                `${SB}/injectables/dysport/dysport-2.svg`,
                `${SB}/injectables/dysport/dysport-3.svg`,
            ],
            overview: 'Dysport (abobotulinumtoxinA) is a neuromodulator similar to BOTOX that relaxes the facial muscles responsible for expression lines. Dysport has a slightly different diffusion profile than BOTOX, making it particularly well-suited for treating larger areas such as the forehead and crow\'s feet while maintaining natural expression.',
            benefits: [
                'Smooths frown lines, forehead lines, and crow\'s feet',
                'Slightly faster onset than BOTOX — visible results in 2–3 days',
                'Diffuses well for even distribution across treatment areas',
                'In-office treatment with no downtime required',
                'Results last approximately 3–4 months',
            ],
            candidateInfo: 'Dysport is an excellent alternative for patients who have not achieved optimal results with BOTOX or who prefer its diffusion characteristics. Like BOTOX, it is appropriate for dynamic wrinkles in healthy adults without contraindications to botulinum toxin products.',
            techniqueDescription: 'Dysport is injected in a similar fashion to BOTOX, with precise needle placement into targeted facial muscles. Due to its diffusion profile, slightly different dosing and injection patterns are used compared to BOTOX to achieve equivalent muscle relaxation. The treatment takes approximately 10 to 15 minutes with results lasting three to four months.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'dermal-fillers': {
            title: 'Dermal Fillers',
            tagline: 'Natural Results',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/Injectables-2.webp',
            images: [
                `${SB}/injectables/juvederm/juvederm_1.svg`,
                `${SB}/injectables/juvederm/juvederm_2.svg`,
                `${SB}/injectables/juvederm/juvederm_3.svg`,
            ],
            overview: 'Dermal fillers restore facial volume, smooth wrinkles and folds, and enhance facial contours that have been diminished by the natural aging process. Dr. Gordon selects from a comprehensive portfolio of FDA-approved filler products — tailoring the material, consistency, and placement technique to each specific area of the face and each patient\'s unique anatomy.',
            benefits: [
                'Restores volume to the cheeks, temples, and under-eye area',
                'Smooths nasolabial folds, marionette lines, and perioral wrinkles',
                'Enhances lip volume and definition',
                'Immediate, visible results lasting 12 months or more',
                'Hyaluronic acid fillers are reversible with hyaluronidase',
            ],
            candidateInfo: 'Dermal fillers are appropriate for adults experiencing volume loss, deepening facial folds, or contour irregularities. The ideal candidate understands that fillers address volume and folds rather than skin laxity, which requires surgical correction. Patients with active skin infections, inflammatory skin conditions, or autoimmune disorders should discuss these with Dr. Gordon before treatment.',
            techniqueDescription: 'Dr. Gordon uses a combination of needle and cannula techniques depending on the treatment area and filler selected. Precise volumetric layering is used to restore natural facial proportions. A topical anesthetic cream or nerve block is applied for patient comfort. Post-treatment ice and gentle pressure minimize bruising and swelling.',
            galleryHref: '/gallery',
            hasGallery: true,
        },
        'filler-revision': {
            title: 'Filler Revision and Correction',
            tagline: 'Natural Results',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/Injectables-2.webp',
            images: [
                `${SB}/injectables/filler-revision/filler-revision_1.svg`,
                `${SB}/injectables/filler-revision/filler-revision_2.svg`,
                `${SB}/injectables/filler-revision/filler-revision_3.svg`,
            ],
            overview: 'Filler revision corrects unsatisfactory outcomes from previous filler treatments, including overfilling, asymmetry, migration, or an unnatural appearance. Dr. Gordon\'s advanced skills in both filler placement and hyaluronidase dissolution allow him to reset, refine, or redistribute existing filler to achieve the natural-looking result patients originally desired.',
            benefits: [
                'Corrects overfilled, lumpy, or asymmetric filler results',
                'Dissolves misplaced hyaluronic acid filler with precision',
                'Restores natural facial balance and proportion',
                'Addresses filler migration and contour irregularities',
                'Can be followed immediately by correct filler placement when appropriate',
            ],
            candidateInfo: 'Candidates are patients who have had prior filler treatments and are dissatisfied with the results, whether due to overfilling, asymmetry, poor product selection, incorrect injection plane, or filler migration. Dr. Gordon will evaluate the location, type, and amount of existing filler before recommending a revision plan.',
            techniqueDescription: 'For hyaluronic acid fillers, hyaluronidase is injected into the affected area to enzymatically dissolve excess or misplaced filler. The dose is carefully titrated to dissolve only what is necessary. Once the correction has been confirmed — typically within 24 to 48 hours — fresh filler may be placed in the correct plane and quantity to achieve the desired outcome.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'hyaluronidase': {
            title: 'Hyaluronidase for Filler Dissolution',
            tagline: 'Natural Results',
            recoveryTime: 'No downtime',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/Injectables-2.webp',
            images: [
                `${SB}/injectables/hyaluronidase/hyaluronidase_1.svg`,
                `${SB}/injectables/hyaluronidase/hyaluronidase_2.svg`,
                `${SB}/injectables/hyaluronidase/hyaluronidase_3.svg`,
            ],
            overview: 'Hyaluronidase is an enzyme that rapidly and safely dissolves hyaluronic acid (HA) dermal fillers. It is used to correct filler complications, reverse unwanted results, or as an emergency treatment in cases of vascular occlusion caused by filler. Dr. Gordon keeps hyaluronidase on hand for all filler procedures and is experienced in its safe and effective use.',
            benefits: [
                'Rapidly dissolves HA fillers in minutes to hours',
                'First-line emergency treatment for vascular occlusion from filler',
                'Corrects overfilling, lumps, and asymmetry',
                'Safe and well-tolerated with minimal side effects',
                'Allows for precise, targeted dissolution without affecting surrounding tissue',
            ],
            candidateInfo: 'Hyaluronidase is appropriate for anyone with unwanted results from hyaluronic acid filler — including Restylane, Juvederm, Belotero, and similar products. It is not effective for non-HA fillers such as Radiesse or Sculptra. In vascular emergency situations, prompt treatment is critical and does not require a separate consultation.',
            techniqueDescription: 'A small volume of hyaluronidase is injected directly into the area containing the filler to be dissolved. The enzyme begins working immediately, with most of the filler dissolving within 24 to 48 hours. Skin testing for allergy can be performed prior to elective dissolution. For emergency vascular occlusion, high-dose hyaluronidase is administered promptly without delay for skin testing.',
            galleryHref: '/gallery',
            hasGallery: false,
        },
        'restylane': {
            title: 'Restylane',
            tagline: 'Natural Results',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/Injectables-2.webp',
            images: [
                `${SB}/injectables/restylane/restylane_1.svg`,
                `${SB}/injectables/restylane/restylane_2.svg`,
                `${SB}/injectables/restylane/restylane_3.svg`,
            ],
            overview: 'Restylane is a family of FDA-approved hyaluronic acid dermal fillers used to restore facial volume, smooth wrinkles, and enhance natural contours. The Restylane family includes formulations optimized for different areas of the face — from the delicate under-eye tear trough to the lips, cheeks, and nasolabial folds. Dr. Gordon selects the precise Restylane product appropriate for each patient\'s needs.',
            benefits: [
                'Restores natural facial volume lost with aging',
                'Smooths moderate to severe nasolabial folds and marionette lines',
                'Specialized formulations for lips, cheeks, and under-eye areas',
                'Results last 6–18 months depending on product and area treated',
                'Reversible with hyaluronidase',
            ],
            candidateInfo: 'Restylane is appropriate for adults seeking to restore facial volume, smooth wrinkles, or enhance contours. The specific product within the Restylane family is selected based on the treatment area and desired result. Patients with a known allergy to gram-positive bacterial proteins or lidocaine should discuss alternatives with Dr. Gordon.',
            techniqueDescription: 'Restylane products are injected using precise techniques matched to each anatomical area and the specific product\'s rheological properties. Restylane-L and Refyne are used for finer lines and the tear trough; Restylane Lyft for cheek and mid-face volume; and Restylane Kysse for lip augmentation. BDDE-crosslinked formulations provide durability while maintaining natural tissue integration.',
            galleryHref: '/gallery/botox',
            hasGallery: true,
        },
        'belotero': {
            title: 'Belotero',
            tagline: 'Natural Results',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/Injectables-2.webp',
            images: [
                `${SB}/injectables/restylane/restylane_1.svg`,
                `${SB}/injectables/restylane/restylane_2.svg`,
                `${SB}/injectables/restylane/restylane_3.svg`,
            ],
            overview: 'Belotero is a hyaluronic acid dermal filler known for its exceptional ability to integrate seamlessly into the skin, making it particularly well-suited for treating fine superficial lines and delicate areas where other fillers may create visible lumps or a bluish Tyndall effect. Dr. Gordon uses Belotero for precise treatment of perioral lines, fine wrinkles, and superficial contour irregularities.',
            benefits: [
                'Integrates uniquely into skin tissue for a smooth, natural result',
                'Ideal for superficial fine lines and delicate skin areas',
                'Minimizes the risk of Tyndall effect in thin-skin areas',
                'Smooth, cohesive gel for even distribution and natural feel',
                'Results last approximately 6–12 months',
            ],
            candidateInfo: 'Belotero is particularly well-suited for patients with fine surface lines around the mouth, nasolabial fold, or forehead where a smooth, skin-integrated filler is preferred. It is an excellent option for patients who have experienced visible lumping or Tyndall effect from other hyaluronic acid fillers in superficial placements.',
            techniqueDescription: 'Belotero\'s Cohesive Polydensified Matrix (CPM) technology gives it a uniquely soft, flexible consistency that distributes evenly within the dermis. Injections are placed at a superficial to mid-dermal level using a fine needle, allowing the product to fill wrinkles without creating visible ridges or discoloration. The treatment takes 20 to 30 minutes with topical anesthetic for comfort.',
            galleryHref: '/gallery/botox',
            hasGallery: true,
        },
        'perlane': {
            title: 'Perlane',
            tagline: 'Natural Results',
            recoveryTime: '1–2 weeks',
            heroImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/Injectables-2.webp',
            images: [
                `${SB}/injectables/restylane/restylane_1.svg`,
                `${SB}/injectables/restylane/restylane_2.svg`,
                `${SB}/injectables/restylane/restylane_3.svg`,
            ],
            overview: 'Perlane is a larger-particle hyaluronic acid dermal filler designed for deeper placement to restore significant facial volume loss and smooth moderate to severe wrinkles. As a member of the Restylane family, Perlane is optimized for areas requiring more substantial volumization such as the cheeks, nasolabial folds, and jawline.',
            benefits: [
                'Provides significant volume restoration for deep facial folds',
                'Ideal for cheek augmentation and mid-face volumization',
                'Longer-lasting results than finer-particle fillers — up to 18 months',
                'Restores natural facial contours lost with age-related volume deflation',
                'Reversible with hyaluronidase for complete peace of mind',
            ],
            candidateInfo: 'Perlane is appropriate for patients with significant facial volume loss, deep nasolabial folds, or flattened cheeks who require substantial volumization. Its larger particle size is designed for placement deep in the dermis or supraperiosteal plane for cheek augmentation. Patients who are new to filler may start with a finer-particle product before advancing to Perlane.',
            techniqueDescription: 'Perlane is injected deep in the dermis or to the bone level using a needle or blunt cannula, providing structural lifting and volumization. The product\'s larger, denser particles resist compression and provide durable correction. Placement technique is critical — superficial injection of Perlane can cause visible lumping and should be avoided in thin-skin areas.',
            galleryHref: '/gallery/botox',
            hasGallery: true,
        },
    },
};

const validCategories: CategoryKey[] = ['medical-eye-care', 'eyelid-surgery', 'non-surgical', 'injectables'];

export function generateStaticParams() {
    const params: { category: string; procedure: string }[] = [];
    for (const category of validCategories) {
        for (const procedure of Object.keys(procedureData[category])) {
            params.push({ category, procedure });
        }
    }
    return params;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ category: string; procedure: string }>;
}): Promise<Metadata> {
    const { category: cat, procedure } = await params;
    const category = cat as CategoryKey;
    const categoryData = procedureData[category];
    if (!categoryData) return {};
    const proc = categoryData[procedure];
    if (!proc) return {};
    return {
        title: `${proc.title} | Dr. James Gordon`,
        description: proc.overview.slice(0, 160),
    };
}

export default async function TreatmentDetailPage({
    params,
}: {
    params: Promise<{ category: string; procedure: string }>;
}) {
    const { category: cat, procedure: procedureSlug } = await params;
    const category = cat as CategoryKey;

    if (!validCategories.includes(category)) {
        notFound();
    }

    const categoryData = procedureData[category];
    const proc = categoryData?.[procedureSlug];

    if (!proc) {
        notFound();
    }

    const categoryLabel: Record<CategoryKey, string> = {
        'medical-eye-care': 'Medical Eye Care',
        'eyelid-surgery': 'Eyelid Surgery',
        'non-surgical': 'Non-Surgical Rejuvenation',
        'injectables': 'Neuromodulators & Dermal Fillers',
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
            <section className="relative w-full h-screen overflow-hidden" style={{ paddingTop: 'var(--navbar-height, 80px)' }}>
                <Image
                    src={proc.images[0]}
                    alt={proc.title}
                    fill
                    className="object-cover object-bottom"
                    priority
                />
                <div className="absolute inset-0 bg-[#2A2E37]/60" />
                <div className="absolute bottom-0 left-0 right-0 bg-[#2A2E37]/90 z-10 px-8 md:px-16 py-8">
                    <p className="font-sans font-extrabold text-[18px] md:text-[24px] uppercase tracking-[0.2em] text-[#CEB776] mb-2">
                        {categoryLabel[category]}
                    </p>
                    <h1 className="font-sans font-black text-2xl sm:text-4xl md:text-[64px] uppercase leading-tight tracking-tight text-white">
                        {proc.title}
                    </h1>
                    <p className="font-sans font-extrabold text-[18px] md:text-[24px] uppercase tracking-wide text-[#CEB776] mt-2">
                        {proc.tagline}
                    </p>
                </div>
            </section>

            {/* ─── BREADCRUMB / BACK NAV ────────────────────────────────────────────── */}
            <div className="border-b border-[#2A2E37]/10">
                <div className="flex items-stretch">
                    <Link
                        href={`/treatments/${category}`}
                        className="bg-[#8B1D2D] text-white font-sans font-extrabold text-[10px] md:text-[18px] uppercase tracking-[0.1em] md:tracking-[0.2em] px-4 md:px-10 py-5 hover:bg-[#2A2E37] transition-colors flex items-center gap-1 md:gap-2 shrink-0"
                    >
                        &#8592; <span className="sm:hidden">BACK</span><span className="hidden sm:inline">BACK TO {categoryLabel[category].toUpperCase()}</span>
                    </Link>
                    <div className="flex-1 flex items-center justify-center px-3 md:px-8 border-x border-[#2A2E37]/10 bg-white min-w-0">
                        <span className="font-sans font-bold text-[11px] md:text-[13px] uppercase tracking-[0.08em] md:tracking-[0.18em] text-[#8B1D2D] truncate">
                            RECOVERY &nbsp;|&nbsp; {proc.recoveryTime}
                        </span>
                    </div>
                    <a
                        href="https://calendly.com/drjamesgordon/consult"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#8B1D2D] text-white font-sans font-extrabold text-[10px] md:text-[18px] uppercase tracking-[0.1em] md:tracking-[0.2em] px-4 md:px-10 py-5 hover:bg-[#2A2E37] transition-colors flex items-center gap-1 md:gap-2 shrink-0"
                    >
                        BOOK CONSULT &#8594;
                    </a>
                </div>
            </div>

            {/* ─── OVERVIEW ─────────────────────────────────────────────────────────── */}
            <section className="bg-white pt-10 pb-0 md:py-20">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <div className="max-w-[860px] mx-auto">
                        <div className="w-10 h-px bg-[#CEB776] mb-6 mx-auto" />
                        <h2 className="font-sans font-black text-3xl md:text-[48px] uppercase leading-none tracking-tight text-[#070707] mb-4">
                            OVERVIEW
                        </h2>
                        <p className="font-sans text-[16px] md:text-[18px] text-[#2A2E37] leading-relaxed text-justify">
                            {proc.overview}
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── PROCEDURE IMAGE ──────────────────────────────────────────────────── */}
            <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                <div className="relative w-full aspect-[16/9] mt-[40px] mb-[40px] md:my-[40px]">
                    <Image
                        src={proc.images[1]}
                        alt={proc.title}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* ─── BENEFITS ─────────────────────────────────────────────────────────── */}
            <section className="bg-[#F7F5F2] pt-10 pb-10 md:py-20">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <div className="w-10 h-px bg-[#CEB776] mb-6 mx-auto" />
                    <h2 className="font-sans font-black text-3xl md:text-[48px] uppercase leading-none tracking-tight text-[#070707] mb-10">
                        BENEFITS
                    </h2>
                    <ul className="flex flex-col gap-5 max-w-[760px] mx-auto">
                        {proc.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#8B1D2D] flex-shrink-0" />
                                <p className="font-sans text-[16px] md:text-[18px] text-[#2A2E37] leading-relaxed text-justify">
                                    {benefit}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ─── CANDIDATE SECTION ────────────────────────────────────────────────── */}
            <section className="bg-white pt-10 pb-10 md:py-20">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                        <div className="text-center">
                            <div className="w-10 h-px bg-[#CEB776] mb-6 mx-auto" />
                            <h2 className="font-sans font-black text-3xl md:text-[48px] uppercase leading-none tracking-tight text-[#070707] mb-4">
                                AM I A CANDIDATE?
                            </h2>
                            <ul className="mx-auto max-w-[760px] space-y-3 text-left font-sans text-[16px] md:text-[18px] text-[#2A2E37] leading-relaxed list-disc list-outside pl-6">
                                {proc.candidateInfo.split('\n').map((item, index) => (
                                    <li key={index}>{item.replace(/^•\s*/, '')}</li>
                                ))}
                            </ul>
                            <a
                                href="https://calendly.com/drjamesgordon/consult"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-8 bg-[#8B1D2D] text-white font-bold uppercase tracking-wider text-xs py-4 px-8 rounded-full hover:bg-[#2A2E37] transition-colors"
                            >
                                Schedule a Consultation
                            </a>
                        </div>
                        <div className="mt-10 md:mt-0 relative h-[320px] md:h-[460px] overflow-hidden">
                            <Image
                                src={proc.images[2]}
                                alt={`${proc.title} consultation`}
                                fill
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-[#2A2E37]/20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── TECHNIQUE ────────────────────────────────────────────────────────── */}
            <section className="bg-[#2A2E37] pt-10 pb-10 md:py-20">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <div className="w-10 h-px bg-[#CEB776] mb-6 mx-auto" />
                    <h2 className="font-sans font-black text-3xl md:text-[48px] uppercase leading-none tracking-tight text-white mb-4">
                        THE PROCEDURE
                    </h2>
                    <div className="max-w-[860px] mx-auto">
                        {proc.techniqueDescription.includes('\n') ? (
                            <ul className="mx-auto max-w-[860px] space-y-3 text-left font-sans text-[16px] md:text-[18px] text-white/85 leading-relaxed list-disc list-outside pl-6">
                                {proc.techniqueDescription.split('\n').map((item, index) => (
                                    <li key={index}>{item.replace(/^•\s*/, '')}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="font-sans text-[16px] md:text-[18px] text-white/85 leading-relaxed text-justify">
                                {proc.techniqueDescription}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* ─── CTA + PATIENT PHOTOS ─────────────────────────────────────────────── */}
            <section className="bg-white pt-10 pb-10 md:py-20">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <div className="w-10 h-px bg-[#CEB776] mx-auto mb-6" />
                    <h2 className="font-sans font-black text-3xl md:text-[48px] uppercase leading-none tracking-tight text-[#070707] mb-4">
                        READY TO GET STARTED?
                    </h2>
                    <p className="font-sans text-[16px] md:text-[18px] text-[#2A2E37] leading-relaxed max-w-[640px] mx-auto mb-10">
                        Schedule your personalized consultation with Dr. Gordon and take the first step toward your treatment goals.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://calendly.com/drjamesgordon/consult"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#8B1D2D] text-white font-bold uppercase tracking-wider text-xs py-4 px-8 rounded-full hover:bg-[#2A2E37] transition-colors"
                        >
                            Book a Consultation
                        </a>
                        {proc.hasGallery && proc.galleryHref !== '/gallery' && (
                            <Link
                                href={proc.galleryHref}
                                className="inline-block border-2 border-[#8B1D2D] text-[#8B1D2D] font-bold uppercase tracking-wider text-xs py-4 px-8 rounded-full hover:bg-[#8B1D2D] hover:text-white transition-colors"
                            >
                                View Patient Photos
                            </Link>
                        )}
                        {proc.hasGallery && proc.galleryHref === '/gallery' && (
                            <Link
                                href="/gallery"
                                className="inline-block border-2 border-[#8B1D2D] text-[#8B1D2D] font-bold uppercase tracking-wider text-xs py-4 px-8 rounded-full hover:bg-[#8B1D2D] hover:text-white transition-colors"
                            >
                                Browse Patient Gallery
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            <BookingCTA />
            <CherryFinancing />
            <Footer />
        </main>
    );
}
