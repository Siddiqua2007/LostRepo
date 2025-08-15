document.addEventListener('DOMContentLoaded', () => {
    // Translation dictionary
    const translations = {
        en: {
            // Header
            app_name: 'AquaPulse',
            nav_home: 'Home',
            nav_features: 'Features',
            nav_how_it_works: 'How It Works',
            nav_dashboard: 'Dashboard',
            nav_rewards: 'Rewards',
            nav_contact: 'Contact',
            btn_login: 'Login',
            btn_signup: 'Sign Up',

            // Hero Section
            hero_title: 'Join the <b>Battle</b> Against Water Wastage',
            hero_subtitle: 'Report leaks, verify issues, and earn rewards while helping conserve water in your community.',
            btn_report_leak: 'Report a Leak',
            btn_learn_more: 'Learn More',

            // Stats Section
            stat_reports: '10,000+',
            stat_reports_label: 'Leaks Reported',
            stat_verified: '7,500+',
            stat_verified_label: 'Verified Cases',
            stat_liters: '25M+',
            stat_liters_label: 'Liters Saved',
            stat_users: '50,000+',
            stat_users_label: 'Active Users',

            // Features Section
            features_title: 'Key Features',
            feature_geo_title: 'Geo-tagged Leak Reporting',
            feature_geo_desc: 'Pinpoint exact locations of water leaks with GPS technology for accurate reporting.',
            feature_crowd_title: 'Crowd Verification',
            feature_crowd_desc: 'Community members can verify reported leaks to ensure accuracy before authorities act.',
            feature_ai_title: 'AI-Powered Risk Mapping',
            feature_ai_desc: 'Our AI predicts high-risk areas for water leaks based on historical data and patterns.',
            feature_rewards_title: 'Incentivized Engagement',
            feature_rewards_desc: 'Earn points and rewards for reporting and verifying leaks in your community.',
            feature_dashboard_title: 'Impact Dashboards',
            feature_dashboard_desc: 'Track your personal impact and community-wide water savings in real-time.',
            feature_recognition_title: 'Recognition System',
            feature_recognition_desc: 'Get recognized as a Water Hero in your community for your contributions.',

            // How It Works Section
            how_it_works_title: 'How AquaPulse Works',
            step1_title: 'Spot a Leak',
            step1_desc: 'Notice a water leak in your neighborhood, street, or public space.',
            step2_title: 'Report with AquaPulse',
            step2_desc: 'Open the app, take a photo, and tag the location. It takes just 30 seconds!',
            step3_title: 'Community Verification',
            step3_desc: 'Other users nearby can verify the report to confirm its validity.',
            step4_title: 'Authorities Notified',
            step4_desc: 'Verified reports are immediately sent to local water authorities.',
            step5_title: 'Track Resolution',
            step5_desc: 'Follow the status of your report until the leak is fixed.',
            step6_title: 'Earn Rewards',
            step6_desc: 'Get points and recognition for your contribution to water conservation.',

            // Dashboard Section
            dashboard_title: 'Real-Time Water Conservation Dashboard',
            dashboard_leaks_reported: 'Leaks Reported',
            dashboard_leaks_fixed: 'Leaks Fixed',
            dashboard_water_saved: 'Water Saved',
            dashboard_active_users: 'Active Users',
            btn_view_full_dashboard: 'View Full Dashboard',

            // Rewards Section
            rewards_title: 'Earn Rewards & Recognition',
            rewards_subtitle: 'Your contributions to water conservation don\'t go unnoticed',
            reward_bronze_title: 'Water Saver',
            reward_bronze_desc: 'Report 5 verified leaks to earn this badge and 500 points.',
            reward_silver_title: 'Water Guardian',
            reward_silver_desc: 'Report 20 verified leaks to earn this badge and 2,000 points.',
            reward_gold_title: 'Water Hero',
            reward_gold_desc: 'Report 50 verified leaks to earn this badge and 5,000 points.',
            reward_platinum_title: 'Water Champion',
            reward_platinum_desc: 'Report 100+ verified leaks to earn this prestigious badge.',
            rewards_points_title: 'Redeem Your Points',
            rewards_points_desc: 'Exchange your earned points for exciting rewards:',
            reward_500: 'Mobile recharge voucher',
            reward_1000: 'Shopping discount coupons',
            reward_2500: 'Smart water bottle',
            reward_5000: 'Featured on our Water Heroes wall',

            // Testimonials Section
            testimonials_title: 'What Our Users Say',
            testimonial1_text: '"AquaPulse made it so easy to report a leak near my home. Within 2 days, the municipal team came and fixed it. I even earned points for my report!"',
            testimonial1_location: 'Bengaluru, Karnataka',
            testimonial2_text: '"As a community leader, I encourage all our residents to use AquaPulse. We\'ve saved thousands of liters by reporting leaks promptly."',
            testimonial2_location: 'Chennai, Tamil Nadu',
            testimonial3_text: '"The rewards system motivated our students to participate. Now our college has a Water Heroes club thanks to AquaPulse!"',
            testimonial3_location: 'Professor, Delhi University',

            // Download App Section
            download_title: 'Get the AquaPulse App',
            download_subtitle: 'Join thousands of users saving water across India',

            // Contact Section
            contact_title: 'Contact Us',
            contact_address: 'AquaPulse Solutions, Tech Park, Bengaluru, Karnataka 560001',
            form_name: 'Your Name',
            form_email: 'Email Address',
            form_phone: 'Phone Number (optional)',
            form_message: 'Your Message',
            form_submit: 'Send Message',

            // FAQ Section
            faq_title: 'Frequently Asked Questions',
            faq1_question: 'How do I report a water leak?',
            faq1_answer: 'To report a leak, open the AquaPulse app, tap "Report Leak," take a photo, and tag the location using your phone\'s GPS. Add details and submit.',
            faq2_question: 'How are rewards calculated?',
            faq2_answer: 'Earn 100 points per verified leak report. Get 50 extra points if verified by 3 community members. Bonus points for first reports in an area.',
            faq3_question: 'What happens after I report a leak?',
            faq3_answer: 'Your report is visible to nearby users for verification. Once verified, it’s sent to water authorities, and you get status updates.',
            faq4_question: 'Is my personal information safe?',
            faq4_answer: 'Yes, your exact location is only shared with authorities. Community members see generalized locations. See our Privacy Policy.',
            faq5_question: 'Can I use AquaPulse without a smartphone?',
            faq5_answer: 'Currently, the app is primary, but we’re developing SMS-based reporting. You can also ask a friend to report on your behalf.',

            // Partners Section
            partners_title: 'Our Partners',

            // Footer
            footer_about: 'AquaPulse is a citizen-led initiative to combat water wastage through community participation and technology.',
            footer_links_title: 'Quick Links',
            footer_resources_title: 'Resources',
            footer_legal_title: 'Legal',
            footer_newsletter_title: 'Newsletter',
            footer_newsletter_desc: 'Subscribe for updates and water conservation tips.',
            footer_email_placeholder: 'Email Address',
            footer_subscribe: 'Subscribe',
            footer_faq: 'FAQ',
            footer_blog: 'Blog',
            footer_water_tips: 'Water Saving Tips',
            footer_community: 'Community Guidelines',
            footer_terms: 'Terms of Service',
            footer_privacy: 'Privacy Policy',
            footer_cookies: 'Cookie Policy',
            footer_copyright: '© 2025 AquaPulse. All rights reserved.',

            // Report Modal
            modal_report_title: 'Report a Water Leak',
            modal_location: 'Location',
            modal_locate_me: 'Use My Location',
            modal_leak_type: 'Type of Leak',
            modal_severity: 'Severity',
            modal_photo: 'Photo (optional but recommended)',
            modal_description: 'Additional Details',
            modal_submit_report: 'Submit Report',
            modal_select_option: 'Select an option',
            modal_pipe: 'Broken Pipe',
            modal_tap: 'Leaking Tap',
            modal_tank: 'Overflowing Tank',
            modal_other: 'Other',
            modal_low: 'Low (dripping)',
            modal_medium: 'Medium (small stream)',
            modal_high: 'High (large flow)',

            // Login Modal
            modal_login_title: 'Login to AquaPulse',
            modal_email: 'Email',
            modal_password: 'Password',
            modal_remember: 'Remember me',
            modal_forgot: 'Forgot password?',
            modal_login: 'Login',
            modal_or: 'or',
            modal_google: 'Continue with Google',
            modal_facebook: 'Continue with Facebook',
            modal_no_account: 'Don\'t have an account?',
            modal_signup: 'Sign up',

            // Signup Modal
            modal_signup_title: 'Create an Account',
            modal_name: 'Full Name',
            modal_phone: 'Phone Number',
            modal_confirm: 'Confirm Password',
            modal_location: 'Your Location',
            modal_terms: 'I agree to the <a href="/terms-of-service">Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a>',
            modal_urban: 'Urban',
            modal_rural: 'Rural',
            modal_have_account: 'Already have an account?'
        },
        hi: {
            // Header
            app_name: 'एक्वापल्स',
            nav_home: 'होम',
            nav_features: 'विशेषताएं',
            nav_how_it_works: 'यह कैसे काम करता है',
            nav_dashboard: 'डैशबोर्ड',
            nav_rewards: 'पुरस्कार',
            nav_contact: 'संपर्क',
            btn_login: 'लॉगिन',
            btn_signup: 'साइन अप',

            // Hero Section
            hero_title: 'पानी की बर्बादी के खिलाफ <b>लड़ाई</b> में शामिल हों',
            hero_subtitle: 'लीक की रिपोर्ट करें, समस्याओं को सत्यापित करें, और अपने समुदाय में पानी बचाने में मदद करते हुए पुरस्कार अर्जित करें।',
            btn_report_leak: 'लीक की रिपोर्ट करें',
            btn_learn_more: 'और जानें',

            // Stats Section
            stat_reports: '10,000+',
            stat_reports_label: 'रिपोर्ट किए गए लीक',
            stat_verified: '7,500+',
            stat_verified_label: 'सत्यापित मामले',
            stat_liters: '25M+',
            stat_liters_label: 'लीटर बचाए गए',
            stat_users: '50,000+',
            stat_users_label: 'सक्रिय उपयोगकर्ता',

            // Features Section
            features_title: 'मुख्य विशेषताएं',
            feature_geo_title: 'जियो-टैग्ड लीक रिपोर्टिंग',
            feature_geo_desc: 'जीपीएस तकनीक के साथ पानी के लीक की सटीक स्थान की पहचान करें।',
            feature_crowd_title: 'समुदाय सत्यापन',
            feature_crowd_desc: 'समुदाय के सदस्य प्राधिकरणों द्वारा कार्रवाई से पहले लीक की सटीकता सुनिश्चित करने के लिए सत्यापित कर सकते हैं।',
            feature_ai_title: 'एआई-संचालित जोखिम मानचित्रण',
            feature_ai_desc: 'हमारा एआई ऐतिहासिक डेटा और पैटर्न के आधार पर पानी के लीक के लिए उच्च जोखिम वाले क्षेत्रों की भविष्यवाणी करता है।',
            feature_rewards_title: 'प्रोत्साहित भागीदारी',
            feature_rewards_desc: 'अपने समुदाय में लीक की रिपोर्टिंग और सत्यापन के लिए अंक और पुरस्कार अर्जित करें।',
            feature_dashboard_title: 'प्रभाव डैशबोर्ड',
            feature_dashboard_desc: 'वास्तविक समय में अपने व्यक्तिगत प्रभाव और समुदाय-व्यापी पानी की बचत को ट्रैक करें।',
            feature_recognition_title: 'मान्यता प्रणाली',
            feature_recognition_desc: 'अपने योगदान के लिए अपने समुदाय में वॉटर हीरो के रूप में मान्यता प्राप्त करें।',

            // How It Works Section
            how_it_works_title: 'एक्वापल्स कैसे काम करता है',
            step1_title: 'लीक देखें',
            step1_desc: 'अपने पड़ोस, गली, या सार्वजनिक स्थान में पानी का रिसाव देखें।',
            step2_title: 'एक्वापल्स के साथ रिपोर्ट करें',
            step2_desc: 'ऐप खोलें, एक फोटो लें, और स्थान टैग करें। इसमें केवल 30 सेकंड लगते हैं!',
            step3_title: 'समुदाय सत्यापन',
            step3_desc: 'आसपास के अन्य उपयोगकर्ता रिपोर्ट की वैधता की पुष्टि करने के लिए सत्यापित कर सकते हैं।',
            step4_title: 'प्राधिकरणों को सूचित किया गया',
            step4_desc: 'सत्यापित रिपोर्ट तुरंत स्थानीय जल प्राधिकरणों को भेजी जाती हैं।',
            step5_title: 'रिज़ॉल्यूशन ट्रैक करें',
            step5_desc: 'लीक ठीक होने तक अपनी रिपोर्ट की स्थिति का पालन करें।',
            step6_title: 'पुरस्कार अर्जित करें',
            step6_desc: 'पानी संरक्षण में अपने योगदान के लिए अंक और मान्यता प्राप्त करें।',

            // Dashboard Section
            dashboard_title: 'वास्तविक समय जल संरक्षण डैशबोर्ड',
            dashboard_leaks_reported: 'रिपोर्ट किए गए लीक',
            dashboard_leaks_fixed: 'ठीक किए गए लीक',
            dashboard_water_saved: 'पानी बचाया गया',
            dashboard_active_users: 'सक्रिय उपयोगकर्ता',
            btn_view_full_dashboard: 'पूरा डैशबोर्ड देखें',

            // Rewards Section
            rewards_title: 'पुरस्कार और मान्यता अर्जित करें',
            rewards_subtitle: 'पानी संरक्षण में आपके योगदान को नजरअंदाज नहीं किया जाता',
            reward_bronze_title: 'वॉटर सेवर',
            reward_bronze_desc: '5 सत्यापित लीक की रिपोर्ट करें और यह बैज और 500 अंक अर्जित करें।',
            reward_silver_title: 'वॉटर गार्डियन',
            reward_silver_desc: '20 सत्यापित लीक की रिपोर्ट करें और यह बैज और 2,000 अंक अर्जित करें।',
            reward_gold_title: 'वॉटर हीरो',
            reward_gold_desc: '50 सत्यापित लीक की रिपोर्ट करें और यह बैज और 5,000 अंक अर्जित करें।',
            reward_platinum_title: 'वॉटर चैंपियन',
            reward_platinum_desc: '100+ सत्यापित लीक की रिपोर्ट करें और यह प्रतिष्ठित बैज अर्जित करें।',
            rewards_points_title: 'अपने अंक रिडीम करें',
            rewards_points_desc: 'अपने अर्जित अंकों को रोमांचक पुरस्कारों के लिए विनिमय करें:',
            reward_500: 'मोबाइल रिचार्ज वाउचर',
            reward_1000: 'शॉपिंग डिस्काउंट कूपन',
            reward_2500: 'स्मार्ट वॉटर बोतल',
            reward_5000: 'हमारे वॉटर हीरोज वॉल पर प्रदर्शित',

            // Testimonials Section
            testimonials_title: 'हमारे उपयोगकर्ता क्या कहते हैं',
            testimonial1_text: '"एक्वापल्स ने मेरे घर के पास लीक की रिपोर्ट करना इतना आसान बना दिया। 2 दिनों के भीतर, नगर निगम की टीम ने इसे ठीक कर दिया। मुझे अपनी रिपोर्ट के लिए अंक भी मिले!"',
            testimonial1_location: 'बेंगलुरु, कर्नाटक',
            testimonial2_text: '"एक समुदाय नेता के रूप में, मैं अपने सभी निवासियों को एक्वापल्स का उपयोग करने के लिए प्रोत्साहित करता हूँ। हमने तुरंत लीक की रिपोर्ट करके हजारों लीटर बचाए हैं।"',
            testimonial2_location: 'चेन्नई, तमिलनाडु',
            testimonial3_text: '"पुरस्कार प्रणाली ने हमारे छात्रों को भाग लेने के लिए प्रेरित किया। अब हमारे कॉलेज में एक्वापल्स की बदौलत एक वॉटर हीरोज क्लब है!"',
            testimonial3_location: 'प्रोफेसर, दिल्ली विश्वविद्यालय',

            // Download App Section
            download_title: 'एक्वापल्स ऐप प्राप्त करें',
            download_subtitle: 'भारत भर में पानी बचाने वाले हजारों उपयोगकर्ताओं में शामिल हों',

            // Contact Section
            contact_title: 'हमसे संपर्क करें',
            contact_address: 'एक्वापल्स सॉल्यूशंस, टेक पार्क, बेंगलुरु, कर्नाटक 560001',
            form_name: 'आपका नाम',
            form_email: 'ईमेल पता',
            form_phone: 'फोन नंबर (वैकल्पिक)',
            form_message: 'आपका संदेश',
            form_submit: 'संदेश भेजें',

            // FAQ Section
            faq_title: 'अक्सर पूछे जाने वाले प्रश्न',
            faq1_question: 'मैं पानी के रिसाव की रिपोर्ट कैसे करूँ?',
            faq1_answer: 'लीक की रिपोर्ट करने के लिए, एक्वापल्स ऐप खोलें, "रिपोर्ट लीक" पर टैप करें, एक फोटो लें, और अपने फोन के जीपीएस का उपयोग करके स्थान टैग करें। विवरण जोड़ें और सबमिट करें।',
            faq2_question: 'पुरस्कारों की गणना कैसे की जाती है?',
            faq2_answer: 'प्रति सत्यापित लीक रिपोर्ट 100 अंक अर्जित करें। यदि 3 समुदाय के सदस्यों द्वारा सत्यापित किया जाता है तो 50 अतिरिक्त अंक प्राप्त करें। किसी क्षेत्र में पहली रिपोर्ट के लिए बोनस अंक।',
            faq3_question: 'लीक की रिपोर्ट करने के बाद क्या होता है?',
            faq3_answer: 'आपकी रिपोर्ट आसपास के उपयोगकर्ताओं को सत्यापन के लिए दिखाई देती है। सत्यापित होने के बाद, यह जल प्राधिकरणों को भेजी जाती है, और आपको स्थिति अपडेट मिलते हैं।',
            faq4_question: 'क्या मेरी व्यक्तिगत जानकारी सुरक्षित है?',
            faq4_answer: 'हां, आपका सटीक स्थान केवल प्राधिकरणों के साथ साझा किया जाता है। समुदाय के सदस्य सामान्यीकृत स्थान देखते हैं। हमारी गोपनीयता नीति देखें।',
            faq5_question: 'क्या मैं स्मार्टफोन के बिना एक्वापल्स का उपयोग कर सकता हूँ?',
            faq5_answer: 'वर्तमान में, ऐप प्राथमिक है, लेकिन हम एसएमएस-आधारित रिपोर्टिंग विकसित कर रहे हैं। आप किसी मित्र से आपके लिए रिपोर्ट करने के लिए भी कह सकते हैं।',

            // Partners Section
            partners_title: 'हमारे भागीदार',

            // Footer
            footer_about: 'एक्वापल्स एक नागरिक-नेतृत्व वाली पहल है जो समुदाय भागीदारी और प्रौद्योगिकी के माध्यम से पानी की बर्बादी से लड़ने के लिए है।',
            footer_links_title: 'त्वरित लिंक',
            footer_resources_title: 'संसाधन',
            footer_legal_title: 'कानूनी',
            footer_newsletter_title: 'न्यूज़लेटर',
            footer_newsletter_desc: 'अपडेट और पानी संरक्षण युक्तियों के लिए सदस्यता लें।',
            footer_email_placeholder: 'ईमेल पता',
            footer_subscribe: 'सदस्यता लें',
            footer_faq: 'अक्सर पूछे जाने वाले प्रश्न',
            footer_blog: 'ब्लॉग',
            footer_water_tips: 'पानी बचाने की युक्तियाँ',
            footer_community: 'समुदाय दिशानिर्देश',
            footer_terms: 'सेवा की शर्तें',
            footer_privacy: 'गोपनीयता नीति',
            footer_cookies: 'कुकी नीति',
            footer_copyright: '© 2025 एक्वापल्स। सभी अधिकार सुरक्षित।',

            // Report Modal
            modal_report_title: 'पानी के रिसाव की रिपोर्ट करें',
            modal_location: 'स्थान',
            modal_locate_me: 'मेरा स्थान उपयोग करें',
            modal_leak_type: 'रिसाव का प्रकार',
            modal_severity: 'गंभीरता',
            modal_photo: 'फोटो (वैकल्पिक लेकिन अनुशंसित)',
            modal_description: 'अतिरिक्त विवरण',
            modal_submit_report: 'रिपोर्ट सबमिट करें',
            modal_select_option: 'एक विकल्प चुनें',
            modal_pipe: 'टूटी पाइप',
            modal_tap: 'रिसता नल',
            modal_tank: 'ओवरफ्लो टैंक',
            modal_other: 'अन्य',
            modal_low: 'कम (टपकना)',
            modal_medium: 'मध्यम (छोटी धारा)',
            modal_high: 'उच्च (बड़ा प्रवाह)',

            // Login Modal
            modal_login_title: 'एक्वापल्स में लॉगिन करें',
            modal_email: 'ईमेल',
            modal_password: 'पासवर्ड',
            modal_remember: 'मुझे याद रखें',
            modal_forgot: 'पासवर्ड भूल गए?',
            modal_login: 'लॉगिन',
            modal_or: 'या',
            modal_google: 'Google के साथ जारी रखें',
            modal_facebook: 'Facebook के साथ जारी रखें',
            modal_no_account: 'खाता नहीं है?',
            modal_signup: 'साइन अप करें',

            // Signup Modal
            modal_signup_title: 'खाता बनाएं',
            modal_name: 'पूरा नाम',
            modal_phone: 'फोन नंबर',
            modal_confirm: 'पासवर्ड की पुष्टि करें',
            modal_location: 'आपका स्थान',
            modal_terms: '<a href="/terms-of-service">सेवा की शर्तें</a> और <a href="/privacy-policy">गोपनीयता नीति</a> से सहमत हूँ',
            modal_urban: 'शहरी',
            modal_rural: 'ग्रामीण',
            modal_have_account: 'पहले से खाता है?'
        }
    };

    // Get language select element
    const languageSelect = document.querySelector('#language-select');
    if (!languageSelect) return;

    // Load saved language or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);

    // Handle language change
    languageSelect.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        localStorage.setItem('language', selectedLanguage);
        updateLanguage(selectedLanguage);
    });

    // Update text content based on selected language
    function updateLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            let translation = translations[lang][key] || translations.en[key] || element.innerHTML;

            // Preserve HTML tags (e.g., <b>, <a>)
            if (element.innerHTML.includes('<')) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = translation;
                element.innerHTML = tempDiv.innerHTML;
            } else {
                element.textContent = translation;
            }

            // Update placeholder attributes for input and textarea
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            }

            // Update select options
            if (element.tagName === 'SELECT') {
                const options = element.querySelectorAll('option');
                options.forEach(option => {
                    const optionKey = option.getAttribute('data-translate');
                    if (optionKey) {
                        option.textContent = translations[lang][optionKey] || translations.en[optionKey] || option.textContent;
                    }
                });
            }
        });

        // Update form labels to maintain floating label functionality
        document.querySelectorAll('.form-group label').forEach(label => {
            const forAttr = label.getAttribute('for');
            const input = document.querySelector(`#${forAttr}`);
            if (input && input.hasAttribute('data-translate')) {
                const key = input.getAttribute('data-translate');
                label.innerHTML = translations[lang][key] || translations.en[key] || label.innerHTML;
            }
        });
    }
});