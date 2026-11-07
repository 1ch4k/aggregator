  // Anti-clickjacking: GitHub Pages can't send X-Frame-Options / frame-ancestors, so refuse to run inside a frame.
  if (window.top !== window.self) {
    document.documentElement.textContent = '';
    throw new Error('Refusing to run inside a frame');
  }

  // Each card is a themed bundle of related links. "added:true" marks a URL
  // resolved for an entry the user listed without one.
  let DATA = [
    {
      cat: "OSINT & Recon",
      title: "OSINT portals",
      items: [
        { name: "start.me/osint4all", url: "https://start.me/p/L1rEYQ/osint4all" },
        { name: "SpiderFoot (OSINT portal via projects)", url: "https://foorilla.com/media/" },
        { name: "DorkSearch", url: "https://dorksearch.com/" },
        { name: "GeoSpy", url: "https://geospy.ai/" },
        { name: "Shodan Eye", url: "https://github.com/BullsEye0/shodan-eye" },
        { name: "Certificate transparency / infra mapping", url: "https://trendshift.io/" },
      ],
    },
    {
      cat: "OSINT & Recon",
      title: "Threat intel feeds",
      items: [
        { name: "cfpsec (CFP intel)", url: "https://github.com/alexandreborges/cfpsec" },
        { name: "Threat-Intelligence-Hackers-Forums", url: "https://github.com/FSECDEV/Threat-Intelligence-Hackers-Forums" },
        { name: "Recorded Future University", url: "https://university.recordedfuture.com/" },
        { name: "Cybrary — Intro CTI", url: "https://www.cybrary.it/course/intro-cyber-threat-intelligence" },
        { name: "SOCRadar — top AI pentest tools", url: "https://socradar.io/blog/top-10-ai-pentest-tools/" },
      ],
    },
    {
      cat: "Red team",
      title: "AD attack path",
      items: [
        { name: "SpecterOps BloodHound", url: "https://github.com/SpecterOps/BloodHound" },
        { name: "bloodhound-cli", url: "https://github.com/SpecterOps/bloodhound-cli" },
        { name: "SpecterOps blog (bloodhound)", url: "https://specterops.io/blog/?category%5B%5D=bloodhound" },
        { name: "Orange-Cyberdefense/GOAD", url: "https://github.com/Orange-Cyberdefense/GOAD" },
        { name: "AD lab for pentest (Medium)", url: "https://medium.com/@browninfosecguy/active-directory-lab-for-penetration-testing-5d7ac393c0c4" },
        { name: "COM Hijacking (SpecterOps)", url: "https://specterops.io/blog/2025/05/28/revisiting-com-hijacking/" },
      ],
    },
    {
      cat: "Red team",
      title: "LOL binaries & privesc",
      items: [
        { name: "LOLBAS Project", url: "https://lolbas-project.github.io/" },
        { name: "HackTricks — Windows privesc", url: "https://hacktricks.wiki/en/windows-hardening/windows-local-privilege-escalation/index.html" },
        { name: "Privesc in Windows (iw)", url: "https://infosecwriteups.com/privilege-escalation-in-windows-380bee3a2842" },
        { name: "FuzzySecurity — privesc tut 16", url: "https://fuzzysecurity.com/tutorials/16.html" },
        { name: "g0tmi1k — basic Linux privesc", url: "https://web.archive.org/web/20210308064709/https://blog.g0tmi1k.com/2011/08/basic-linux-privilege-escalation/" },
      ],
    },
    {
      cat: "Red team",
      title: "Agentic / AI red-cell",
      items: [
        { name: "awarexone/Agentic-Bug-Hunter", url: "https://github.com/awarexone/Agentic-Bug-Hunter" },
        { name: "SnailSploit/Claude-Red", url: "https://github.com/SnailSploit/Claude-Red" },
        { name: "Masriyan — Claude cybersec skill", url: "https://github.com/Masriyan/Claude-Code-CyberSecurity-Skill" },
        { name: "martian56/redcell", url: "https://github.com/martian56/redcell" },
        { name: "elder-plinius/t3mp3st", url: "https://github.com/elder-plinius/t3mp3st" },
        { name: "uphiago/recon-skills", url: "https://github.com/uphiago/recon-skills/" },
        { name: "STARX33/LAAF", url: "https://github.com/STARX33/LAAF" },
      ],
    },
    {
      cat: "Exploits & CVE",
      title: "Exploit search",
      items: [
        { name: "Exploit-DB", url: "https://www.exploit-db.com/" },
        { name: "searchsploit (repo)", url: "https://github.com/SploitHQ/searchsploit" },
        { name: "cvemap (projectdiscovery)", url: "https://github.com/projectdiscovery/cvemap" },
        { name: "ra1nb0rn/search_vulns", url: "https://github.com/ra1nb0rn/search_vulns" },
        { name: "search-vulns.com", url: "https://search-vulns.com/" },
        { name: "Sploitus", url: "https://sploitus.com/?query=maxdb#exploits" },
        { name: "Vulners / Packetstorm", url: "https://vulners.com/packetstorm/PACKETSTORM:180751" },
        { name: "AttackerKB", url: "https://attackerkb.com/" },
        { name: "CERT — VU#976247", url: "https://www.kb.cert.org/vuls/id/976247" },
        { name: "Openwall oss-security", url: "https://www.openwall.com/lists/oss-security/2026/05/07/8" },
      ],
    },
    {
      cat: "Exploits & CVE",
      title: "ProjectDiscovery suite",
      items: [
        { name: "projectdiscovery repos", url: "https://github.com/orgs/projectdiscovery/repositories" },
      ],
    },
    {
      cat: "Web / API",
      title: "Hacking playbooks",
      items: [
        { name: "HackTricks", url: "https://hacktricks.wiki/en/index.html" },
        { name: "The Hacker Recipes", url: "https://www.thehacker.recipes/" },
        { name: "Hacksplaining lessons", url: "https://www.hacksplaining.com/lessons" },
        { name: "Guru99 — SQLi example", url: "https://www.guru99.com/learn-sql-injection-with-practical-example.html" },
        { name: "Hacksnation", url: "https://hacksnation.com/" },
        { name: "hackers-arise — web app hacking w/ CyberMes", url: "https://hackers-arise.com/artificial-intelligence-ai-in-cybersecurity-part-26-web-app-hacking-with-cybermes/" },
      ],
    },
    {
      cat: "Web / API",
      title: "RevShells & payloads",
      items: [
        { name: "RevShells generator", url: "https://www.revshells.com/" },
      ],
    },
    {
      cat: "LLM / AI sec",
      title: "LLM red-team",
      items: [
        { name: "NVIDIA/garak", url: "https://github.com/NVIDIA/garak" },
        { name: "Adversarial Robustness Toolbox", url: "https://adversarial-robustness-toolbox.readthedocs.io/en/latest/" },
        { name: "OWASP GenAI resources", url: "https://genai.owasp.org/resources/" },
        { name: "OWASP Threat Dragon (site)", url: "https://www.threatdragon.com/#/" },
        { name: "OWASP/threat-dragon (repo)", url: "https://github.com/OWASP/threat-dragon" },
        { name: "projectblack — local AI for cyber", url: "https://projectblack.io/blog/local-ai-for-cyber-security/" },
        { name: "FuzzingLabs/mcp-security-hub", url: "https://github.com/FuzzingLabs/mcp-security-hub" },
        { name: "hermes-agent", url: "https://hermes-agent.org/" },
        { name: "Moak.ai", url: "https://moak.ai/#wake-up-call" },
      ],
    },
    {
      cat: "LLM / AI sec",
      title: "Model leaderboards",
      items: [
        { name: "LMArena", url: "https://lmarena.ai/leaderboard" },
        { name: "Scale leaderboard", url: "https://scale.com/leaderboard" },
        { name: "llm-stats", url: "https://llm-stats.com/" },
        { name: "HF LLM course ch.1", url: "https://huggingface.co/learn/llm-course/chapter1/1" },
        { name: "DeepHat (HuggingFace org)", url: "https://huggingface.co/DeepHat", added: true },
      ],
    },
    {
      cat: "Malware & RE",
      title: "Malware dev / evasion",
      items: [
        { name: "MalDev Academy", url: "https://maldevacademy.com/" },
        { name: "s3cur3th1ssh1t — EDR bypass", url: "https://s3cur3th1ssh1t.github.io/A-tale-of-EDR-bypass-methods/" },
        { name: "Checkpoint — evasions", url: "https://evasions.checkpoint.com/" },
        { name: "Church of Malware", url: "https://churchofmalware.org/#about" },
      ],
    },
    {
      cat: "CTF & labs",
      title: "CTF platforms",
      items: [
        { name: "CTFtime", url: "https://ctftime.org/" },
        { name: "FCSC", url: "https://fcsc.fr/fr/" },
        { name: "404 CTF", url: "https://www.404ctf.fr" },
        { name: "crackmes.one", url: "https://crackmes.one/" },
        { name: "HackerRank — security permutations", url: "https://www.hackerrank.com/challenges/security-tutorial-permutations/problem?isFullScreen=true" },
        { name: "cicd-goat", url: "https://github.com/cider-security-research/cicd-goat" },
        { name: "OWASP VWAD", url: "https://vwad.owasp.org/" },
        { name: "Plug and Pwn", url: "https://plugandpwn.com/" },
      ],
    },
    {
      cat: "Learning",
      title: "Courses & roadmaps",
      items: [
        { name: "ClassCentral — offensive sec (free)", url: "https://www.classcentral.com/subject/offensive-security?free=true&sort=rating-up" },
        { name: "SANS skills roadmap", url: "https://www.sans.org/cyber-security-skills-roadmap" },
        { name: "Grow Google — cybersec cert", url: "https://grow.google/intl/europe/google-career-certificates/cybersecurity/" },
        { name: "roadmap.sh", url: "https://roadmap.sh/" },
        { name: "Fortinet FCF cybersec", url: "https://training.fortinet.com/local/staticpage/view.php?page=fcf_cybersecurity" },
        { name: "Fortinet FCF library (freelance)", url: "https://training.fortinet.com/local/library/?category=Certification%3AFCF_Cybersecurity" },
        { name: "Securiti — DSPM cert", url: "https://education.securiti.ai/certifications/dspm/" },
        { name: "Anthropic Skilljar", url: "https://anthropic.skilljar.com/" },
        { name: "awesome-security", url: "https://github.com/sbilly/awesome-security" },
        { name: "999 Course Sale (freebies)", url: "https://999coursesale.com/freebie-courses-list.php" },
      ],
    },
    {
      cat: "Learning",
      title: "Research & papers",
      items: [
        { name: "Semantic Scholar", url: "https://www.semanticscholar.org/", added: true },
        { name: "Connected Papers", url: "https://www.connectedpapers.com/" },
        { name: "Zeta Alpha search", url: "https://search.zeta-alpha.com/" },
        { name: "scholarai", url: "https://scholarai.io/" },
        { name: "Scribd downloader mirror", url: "https://scribd.vdownloaders.com/" },
        { name: "Freedium mirror", url: "https://freedium-mirror.cfd/" },
      ],
    },
    {
      cat: "Learning",
      title: "Blockchain / crypto",
      items: [
        { name: "ethereumbook", url: "https://github.com/ethereumbook/ethereumbook" },
        { name: "QOSF project list (quantum)", url: "https://qosf.org/project_list/" },
      ],
    },
    {
      cat: "Conferences",
      title: "Academic",
      items: [
        { name: "ACM CCS 2025", url: "https://www.sigsac.org/ccs/CCS2025/" },
        { name: "USENIX", url: "https://www.usenix.org/" },
        { name: "NDSS", url: "https://www.ndss-symposium.org/" },
        { name: "IEEE S&P 2025", url: "https://sp2025.ieee-security.org/" },
      ],
    },
    {
      cat: "Conferences",
      title: "Industry (FR)",
      items: [
        { name: "Eventbrite FR — cybersecurity", url: "https://www.eventbrite.fr/d/online/cybersecurity/" },
        { name: "10times — cybersecurity France", url: "https://10times.com/france/cyber-security" },
        { name: "LeHack", url: "https://lehack.org/fr" },
        { name: "InfoSec Conferences — France", url: "https://infosec-conferences.com/country/france" },
        { name: "FIC Forum", url: "https://www.forum-fic.com/en/home/" },
        { name: "DEF CON media", url: "https://media.defcon.org/" },
        { name: "DEF CON 34 — DPRK laptop farm PDF", url: "https://media.defcon.org/DEF%20CON%2034/DEF%20CON%2034%20presentations/DEF%20CON%2034%20presentations/DEF%20CON%2034%20-%20Heiner%20Garc%C3%ADa%2C%20Mauro%20Eldritch%20-%20Smile%2C%20you're%20on%20camera%20Livestreaming%20from%20North%20Korea's%20IT%20workers%20laptop%20farm%20-%20Are%20v1.pdf" },
      ],
    },
    {
      cat: "Conferences",
      title: "Gov / Admin",
      items: [
        { name: "DGSSI (MA)", url: "https://www.dgssi.gov.ma/fr" },
        { name: "campusfrance doctorat", url: "https://doctorat.campusfrance.org" },
        { name: "démarches-simplifiées (APS)", url: "https://www.demarches-simplifiees.fr/" },
      ],
    },
    {
      cat: "Privacy",
      title: "Privacy & deletion",
      items: [
        { name: "Privacy Guides", url: "https://www.privacyguides.org/en/" },
        { name: "privacypack", url: "https://privacypack.org/" },
        { name: "justdeleteme", url: "https://justdeleteme.xyz/" },
        { name: "AlternativeTo", url: "https://alternativeto.net/" },
        { name: "Ibit-to/google-unlocked", url: "https://github.com/Ibit-to/google-unlocked" },
      ],
    },
    {
      cat: "Piracy / Media",
      title: "Piracy guides",
      items: [
        { name: "FMHY — video piracy", url: "https://fmhy.net/videopiracyguide" },
        { name: "FitGirl Repacks", url: "https://fitgirl-repacks.site/" },
        { name: "RuTracker", url: "https://rutracker.org" },
        { name: "massgrave — Win10 links", url: "https://massgrave.dev/windows_10_links" },
        { name: "GenP (Adobe)", url: "https://github.com/TheMythologist/GenP" },
        { name: "Boycott (TWN)", url: "https://boycott.thewitness.news/browse/1" },
      ],
    },
    {
      cat: "Piracy / Media",
      title: "Streaming",
      items: [
        { name: "tv.garden (SA)", url: "https://tv.garden/sa/gUNShL4GZ5DwVP" },
      ],
    },
    {
      cat: "AI tools",
      title: "Agentic / art",
      items: [
        { name: "ArtCraft apps", url: "https://getartcraft.com/apps" },
        { name: "bbradar", url: "https://bbradar.io/" },
      ],
    },
    {
      cat: "AI tools",
      title: "Writing & language",
      items: [
        { name: "LanguageTool", url: "https://languagetool.org/" },
      ],
    },
    {
      cat: "Misc / fun",
      title: "Misc",
      items: [
        { name: "xkcd", url: "https://xkcd.com/" },
        { name: "Habous — Maroc prayer times", url: "https://habous.gov.ma/prieres/index.php" },
        { name: "Maiia", url: "https://www.maiia.com/" },
        { name: "Google Drive — folder", url: "https://drive.google.com/drive/folders/1c4TvoAf59GR2oYq2VU53oMXR4MkL3pQu" },
      ],
    },
    {
      cat: "OSINT & Recon",
      title: "User enumeration",
      items: [
        { name: "kaifcodec/user-scanner", url: "https://github.com/kaifcodec/user-scanner" },
      ],
    },
    {
      cat: "Red team",
      title: "YouTube channel",
      items: [
        { name: "mmofficialclub", url: "https://youtube.com/@mmofficialclub?si=RjNvkQxM4-Nl8SZo" },
      ],
    },
    {
      cat: "Infra / lab",
      title: "Identity / dir",
      items: [
        { name: "Univention UCS", url: "https://www.univention.com/products/ucs/" },
      ],
    },
    {
      cat: "YouTube",
      title: "Security",
      items: [
        { name: "MalwareTechBlog", url: "https://www.youtube.com/@MalwareTechBlog/videos" },
        { name: "LiveOverflow", url: "https://www.youtube.com/@LiveOverflow/videos" },
        { name: "processus thief", url: "https://www.youtube.com/@processusthief/videos" },
        { name: "HacktBack", url: "https://www.youtube.com/@HacktBack/videos" },
        { name: "hackintux", url: "https://www.youtube.com/@hackintux5813/videos" },
        { name: "Th3 Hacker News Bdarija", url: "https://www.youtube.com/c/Th3HackerNewsBdarija/videos" },
        { name: "waie", url: "https://www.youtube.com/@waie/videos" },
        { name: "wakedxy", url: "https://www.youtube.com/@wakedxy/videos" },
        { name: "Micode", url: "https://www.youtube.com/@Micode/videos" },
        { name: "Underscore_", url: "https://www.youtube.com/@Underscore_/videos" },
      ],
    },
    {
      cat: "YouTube",
      title: "CS / AI",
      items: [
        { name: "Computerphile", url: "https://www.youtube.com/@Computerphile/videos" },
        { name: "Andrej Karpathy", url: "https://www.youtube.com/@AndrejKarpathy/videos" },
        { name: "Two Minute Papers (Károly Zsolnai)", url: "https://www.youtube.com/c/K%C3%A1rolyZsolnai/videos" },
        { name: "Papers We Love", url: "https://www.youtube.com/c/PapersWeLove/videos" },
        { name: "Giles McMullen", url: "https://www.youtube.com/@gilesmcmullen/videos" },
      ],
    },
    {
      cat: "YouTube",
      title: "General",
      items: [
        { name: "Vox", url: "https://www.youtube.com/@Vox/videos" },
        { name: "TED", url: "https://www.youtube.com/@TED/videos" },
        { name: "country_life_vlog", url: "https://www.youtube.com/@country_life_vlog/videos" },
        { name: "anaHr", url: "https://www.youtube.com/c/anaHr/videos" },
        { name: "Playlist (secret)", url: "https://www.youtube.com/playlist?list=PLnPPawYttsm_BTjXEZB5C4uBRPcwcehrk" },
        { name: "RiXVs1dXh-g (video)", url: "https://www.youtube.com/watch?v=RiXVs1dXh-g" },
      ],
    },
    {
      cat: "Software · Cross-platform",
      title: "Browsers & editors",
      items: [
        { name: "Brave — download", url: "https://brave.com/download/" },
        { name: "VS Code — download", url: "https://code.visualstudio.com/download" },
      ],
    },
    {
      cat: "Software · Cross-platform",
      title: "Dev / runtime",
      items: [
        { name: "Git — downloads", url: "https://git-scm.com/downloads" },
        { name: "Node.js — download", url: "https://nodejs.org/en/download" },
        { name: "Python — downloads", url: "https://www.python.org/downloads/" },
        { name: "Docker Desktop — download", url: "https://www.docker.com/products/docker-desktop/" },
      ],
    },
    {
      cat: "Software · Cross-platform",
      title: "Utilities",
      items: [
        { name: "KeePass — download", url: "https://keepass.info/download.html" },
        { name: "Okular — download", url: "https://okular.kde.org/download/" },
        { name: "Upscayl — releases", url: "https://github.com/upscayl/upscayl/releases" },
        { name: "Xournal++ — releases", url: "https://github.com/xournalpp/xournalpp/releases" },
      ],
    },
    {
      cat: "Software · Cross-platform",
      title: "Media",
      items: [
        { name: "qBittorrent — download", url: "https://www.qbittorrent.org/download" },
        { name: "mpv — install", url: "https://mpv.io/installation/" },
        { name: "VLC — download", url: "https://www.videolan.org/vlc/" },
        { name: "OBS Studio — download", url: "https://obsproject.com/download" },
        { name: "Stremio — downloads", url: "https://www.stremio.com/downloads" },
        { name: "Steam — install", url: "https://store.steampowered.com/about/" },
        { name: "Logitech G HUB — download", url: "https://www.logitechg.com/en-us/innovation/g-hub.html" },
      ],
    },
    {
      cat: "Software · Cross-platform",
      title: "Mail",
      items: [
        { name: "Proton Mail — download", url: "https://proton.me/mail/download" },
      ],
    },
    {
      cat: "Software · Cross-platform",
      title: "Security tools",
      items: [
        { name: "Burp Suite Community — download", url: "https://portswigger.net/burp/communitydownload" },
      ],
    },
    {
      cat: "Software · Windows",
      title: "Windows-only",
      items: [
        { name: "Notepad++ — downloads", url: "https://notepad-plus-plus.org/downloads/" },
        { name: "7-Zip — download", url: "https://www.7-zip.org/download.html" },
        { name: "SumatraPDF — download", url: "https://www.sumatrapdfreader.org/download-free-pdf-viewer" },
        { name: "Python (MS Store)", url: "https://apps.microsoft.com/detail/9NCVDN91XZQP" },
        { name: "VC++ Redistributable (x64)", url: "https://aka.ms/vs/17/release/vc_redist.x64.exe" },
        { name: "BCUninstaller — download", url: "https://www.bcuninstaller.com/download" },
        { name: "ExplorerPatcher — releases", url: "https://github.com/valinet/ExplorerPatcher/releases" },
        { name: "balenaEtcher — download", url: "https://etcher.balena.io/#download-etcher" },
        { name: "Rufus — download", url: "https://rufus.ie/en/#download" },
        { name: "WSL + Ubuntu — install", url: "https://learn.microsoft.com/en-us/windows/wsl/install" },
        { name: "Hyper-V — enable", url: "https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v" },
        { name: "Epic Games — download", url: "https://store.epicgames.com/en-US/download" },
        { name: "League of Legends — download", url: "https://signup.leagueoflegends.com/en-us/signup/redownload" },
      ],
    },
    {
      cat: "Software · Linux",
      title: "Linux-only",
      items: [
        { name: "zathura — download", url: "https://pwmt.org/projects/zathura/download/" },
        { name: "htop — download", url: "https://htop.dev/downloads.html" },
        { name: "VMware Workstation Pro — download", url: "https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion" },
        { name: "Stremio (Flatpak)", url: "https://flathub.org/apps/com.stremio.Stremio" },
      ],
    },
    {
      cat: "Extensions",
      title: "Chrome extensions",
      items: [
        { name: "uBlock Origin Lite", url: "https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh", added: true },
        { name: "Unhook — YouTube cleaner", url: "https://chromewebstore.google.com/detail/unhook-remove-youtube-rec/khncfooichmfjbepaaaebmommgaepoid", added: true },
        { name: "iGraal", url: "https://chromewebstore.google.com/detail/igraal-shopping-with-savi/dnjbdplgaoeiejmddejmdbbamkbemkio", added: true },
        { name: "Email Tracker + Pixelblock", url: "https://chromewebstore.google.com/detail/email-tracker-pixelblock/bnompdfnhdbgdaoanapncknhmckenfog", added: true },
        { name: "ColorZilla", url: "https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp", added: true },
        { name: "Privacy Badger", url: "https://chromewebstore.google.com/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp", added: true },
        { name: "FireShot — full-page screenshots", url: "https://chromewebstore.google.com/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg", added: true },
        { name: "Google Keep Full Screen", url: "https://chromewebstore.google.com/detail/google-keep-full-screen-e/eggnolhfcbkgnjeomajmdbcpbkdnomdc", added: true },
        { name: "Dark Reader", url: "https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh", added: true },
        { name: "MailTracker for Gmail", url: "https://chromewebstore.google.com/detail/mailtracker-email-tracker/pgbdljpkijehgoacbjpolaomhkoffhnl", added: true },
      ],
    },
  ];

  function esc(s) {
    return String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  // Only plain http(s) links are allowed anywhere: blocks javascript:, data:, vbscript: etc.
  function safeUrl(u) {
    if (typeof u !== 'string' || u.length > 2048) return null;
    try {
      const p = new URL(u.trim());
      return (p.protocol === 'https:' || p.protocol === 'http:') ? u.trim() : null;
    } catch (e) { return null; }
  }
  const str = (v, max) => (typeof v === 'string' ? v : '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, max);
  // Every data source (bundled, data.json, local draft) is untrusted input: rebuild it from known fields only.
  function sanitizeData(arr) {
    if (!Array.isArray(arr)) return null;
    const out = [];
    for (const c of arr.slice(0, 500)) {
      if (!c || typeof c !== 'object' || !Array.isArray(c.items)) continue;
      const items = [];
      for (const i of c.items.slice(0, 500)) {
        const url = i && safeUrl(i.url);
        const name = i && str(i.name, 200);
        if (url && name) items.push(i.added === true ? { name, url, added: true } : { name, url });
      }
      out.push({ cat: str(c.cat, 80) || 'Misc', title: str(c.title, 120) || 'Untitled', items });
    }
    return out;
  }

  // --- Persistence: remote data.json (shared) + local draft (per-browser) ---
  const DRAFT_KEY = 'aggregator.draft.v1';
  const DATA_URL  = './data.json';
  const REPO_OWNER = '1ch4k';
  const REPO_NAME  = 'aggregator';
  const DATA_PATH  = 'data.json';
  const BRANCH     = 'main';

  function loadDraft() {
    try { const raw = localStorage.getItem(DRAFT_KEY); return raw ? sanitizeData(JSON.parse(raw)) : null; }
    catch (e) { return null; }
  }
  function saveData() {
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify(DATA)); } catch (e) {}
    if (typeof publishBtn !== 'undefined' && publishBtn) publishBtn.classList.add('dirty');
  }
  function clearDraft() {
    try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
    if (publishBtn) publishBtn.classList.remove('dirty');
  }

  async function initialLoad() {
    DATA = sanitizeData(DATA) || [];
    // 1. Fetch the shared data.json from the deployed site (or repo)
    try {
      const resp = await fetch(DATA_URL + '?v=' + Date.now(), { cache: 'no-store', credentials: 'omit' });
      if (resp.ok) {
        const parsed = sanitizeData(await resp.json());
        if (parsed && parsed.length) DATA = parsed;
      }
    } catch (e) {}
    // 2. If this browser has an unpublished draft, it wins
    const draft = loadDraft();
    if (draft && Array.isArray(draft) && draft.length) {
      DATA = draft;
      if (publishBtn) publishBtn.classList.add('dirty');
    }
    renderChips();
    render();
    openFromUrl();
  }

  async function publishToGitHub() {
    if (!authed || !pat) { const ok = await tryAuth(); if (!ok) return; }
    const base = 'https://api.github.com/repos/' + REPO_OWNER + '/' + REPO_NAME + '/contents/' + DATA_PATH;
    const prevLabel = publishBtn.querySelector('span').textContent;
    publishBtn.querySelector('span').textContent = 'Publishing…';
    publishBtn.disabled = true;
    try {
      // GET current SHA (404 is fine, means data.json doesn't exist yet)
      let sha = null;
      const g = await fetch(base + '?ref=' + BRANCH, { headers: { 'Authorization': 'Bearer ' + pat, 'Accept': 'application/vnd.github+json' } });
      if (g.ok) { sha = (await g.json()).sha; }
      else if (g.status !== 404) { throw new Error('GET ' + g.status + ': ' + (await g.text()).slice(0,180)); }
      // PUT new content
      const jsonStr = JSON.stringify(sanitizeData(DATA), null, 2);
      const content = btoa(unescape(encodeURIComponent(jsonStr)));
      const body = { message: 'Update aggregator data', content, branch: BRANCH };
      if (sha) body.sha = sha;
      const p = await fetch(base, {
        method: 'PUT',
        headers: { 'Authorization': 'Bearer ' + pat, 'Accept': 'application/vnd.github+json', 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!p.ok) {
        if (p.status === 401 || p.status === 403) {
          forgetAuth();
          document.body.classList.remove('manage');
          location.hash = '';
        }
        throw new Error('PUT ' + p.status + ': ' + (await p.text()).slice(0,180));
      }
      clearDraft();
      publishBtn.querySelector('span').textContent = 'Published!';
      setTimeout(() => { publishBtn.querySelector('span').textContent = 'Publish'; publishBtn.disabled = false; }, 2500);
    } catch (e) {
      alert('Failed.');
      publishBtn.querySelector('span').textContent = prevLabel;
      publishBtn.disabled = false;
    }
  }

  // --- DOM shortcuts ---
  const grid = document.getElementById('grid');
  const chipsEl = document.getElementById('chips');
  const q = document.getElementById('q');
  const emptyEl = document.getElementById('empty');
  const scrim = document.getElementById('scrim');
  const mTitle = document.getElementById('mTitle');
  const mCat = document.getElementById('mCat');
  const mList = document.getElementById('mList');
  const addName = document.getElementById('addName');
  const addUrl = document.getElementById('addUrl');
  const addBtn = document.getElementById('addBtn');
  const delCardBtn = document.getElementById('delCardBtn');
  const fab = document.getElementById('fab');
  const catList = document.getElementById('catList');
  const modeBtn = document.getElementById('modeBtn');
  const modeLabel = document.getElementById('modeLabel');
  const publishBtn = document.getElementById('publishBtn');

  let activeCat = 'All';
  let query = '';
  let currentIdx = -1;
  let editingLink = -1;

  // --- Mode (view / manage), gated by a GitHub PAT ---
  // One token does both: unlocks Manage mode AND publishes to GitHub.
  // Token is NEVER persisted — lives only as this JS variable, cleared on exit.
  let authed = false;
  let pat = null;

  function forgetAuth() {
    pat = null;
    authed = false;
  }

  async function tryAuth() {
    const input = (window.prompt('Key:') || '').trim();
    if (!input) return false;
    // Token goes only to api.github.com; refuse anything that isn't token-shaped.
    if (!/^[A-Za-z0-9_]{20,255}$/.test(input)) { alert('Denied.'); return false; }
    try {
      const resp = await fetch('https://api.github.com/repos/' + REPO_OWNER + '/' + REPO_NAME, {
        headers: { 'Authorization': 'Bearer ' + input, 'Accept': 'application/vnd.github+json' },
        credentials: 'omit', referrerPolicy: 'no-referrer',
      });
      // Any GitHub token can read a public repo, so require write access, not just a valid token.
      if (resp.ok && (await resp.json())?.permissions?.push === true) {
        pat = input;
        authed = true;
        return true;
      }
    } catch (e) {}
    alert('Denied.');
    return false;
  }

  function readMode() {
    const want = location.hash.replace(/^#/, '') === 'manage';
    return (want && authed) ? 'manage' : 'view';
  }
  function applyMode() {
    const m = readMode();
    document.body.classList.toggle('manage', m === 'manage');
    modeLabel.textContent = m === 'manage' ? 'Done' : 'Manage';
    mTitle.readOnly = (m === 'view');
    mCat.readOnly = (m === 'view');
  }
  window.addEventListener('hashchange', async () => {
    const wantManage = location.hash.replace(/^#/, '') === 'manage';
    if (wantManage) {
      if (!authed) {
        const ok = await tryAuth();
        if (!ok) { history.replaceState(null, '', location.pathname + location.search); applyMode(); return; }
      }
    } else {
      forgetAuth(); // leaving manage mode: drop token from memory
    }
    applyMode();
    if (scrim.classList.contains('open')) renderModal();
  });
  modeBtn.addEventListener('click', async () => {
    if (readMode() === 'manage') { forgetAuth(); location.hash = ''; return; }
    const ok = await tryAuth();          // always prompts; nothing is remembered
    if (!ok) return;
    location.hash = 'manage';
  });

  // --- Chips ---
  function renderChips() {
    const cats = Array.from(new Set(DATA.map(d => d.cat)));
    const counts = Object.fromEntries(cats.map(c => [c, DATA.filter(d => d.cat === c).reduce((s,d) => s + d.items.length, 0)]));
    if (activeCat !== 'All' && !cats.includes(activeCat)) activeCat = 'All';
    chipsEl.innerHTML = '';
    const total = DATA.reduce((s,d) => s + d.items.length, 0);
    chipsEl.appendChild(chip('All', total));
    for (const c of cats) chipsEl.appendChild(chip(c, counts[c]));
    catList.innerHTML = cats.map(c => `<option value="${esc(c)}">`).join('');
  }
  function chip(label, n) {
    const el = document.createElement('button');
    el.className = 'chip' + (label === activeCat ? ' active' : '');
    el.innerHTML = `${esc(label)}<span class="n">${n}</span>`;
    el.onclick = () => { activeCat = label; renderChips(); render(); };
    return el;
  }

  // --- Grid ---
  function render() {
    grid.innerHTML = '';
    let shown = 0;
    const norm = s => (s || '').toLowerCase().replace(/[\s\-_.\/:?#=&@+%]+/g, ' ');
    const terms = norm(query).split(' ').filter(Boolean);
    const hits = s => { const h = norm(s); return terms.every(t => h.includes(t)); };
    DATA.forEach((card, idx) => {
      if (activeCat !== 'All' && card.cat !== activeCat) return;
      const items = terms.length
        ? card.items.filter(i => hits(i.name + ' ' + (i.url||'') + ' ' + card.title + ' ' + card.cat))
        : card.items;
      if (query && !items.length) return;
      shown += items.length;
      const preview = items.slice(0, 5);
      const extra = items.length - preview.length;
      const el = document.createElement('article');
      el.className = 'card';
      el.tabIndex = 0;
      el.innerHTML = `
        <h3>${esc(card.title)}<span class="tag">${esc(card.cat)}</span></h3>
        <ul class="preview">${
          items.length === 0
            ? '<li class="more">Empty — open to add links</li>'
            : preview.map(i => `<li>${esc(i.name)}${terms.length && i.url && !hits(i.name + ' ' + card.title + ' ' + card.cat) ? `<span class="u">${esc(i.url.replace(/^https?:\/\/(www\.)?/, ''))}</span>` : ''}</li>`).join('') + (extra > 0 ? `<li class="more">+ ${extra} more</li>` : '')
        }</ul>
      `;
      el.addEventListener('click', () => openModal(idx));
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(idx); } });
      grid.appendChild(el);
    });
    emptyEl.hidden = !(query && shown === 0);
  }

  // --- Modal ---
  const slug = t => (t || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const shareBtn = document.getElementById('shareBtn');
  function cardUrl(idx) {
    const u = new URL(location.href);
    u.hash = '';
    if (idx >= 0 && DATA[idx]) u.searchParams.set('card', slug(DATA[idx].title));
    else u.searchParams.delete('card');
    return u.toString();
  }
  function setCardParam(idx) {
    const u = new URL(cardUrl(idx));
    u.hash = location.hash;
    history.replaceState(null, '', u);
  }
  function openFromUrl() {
    const want = new URLSearchParams(location.search).get('card');
    if (!want) return;
    const idx = DATA.findIndex(c => slug(c.title) === want);
    if (idx >= 0) openModal(idx); else setCardParam(-1);
  }
  shareBtn.addEventListener('click', async () => {
    const url = cardUrl(currentIdx);
    try { await navigator.clipboard.writeText(url); }
    catch (e) { prompt('Copy this link:', url); return; }
    shareBtn.textContent = 'Copied!';
    shareBtn.classList.add('copied');
    setTimeout(() => { shareBtn.textContent = 'Copy link'; shareBtn.classList.remove('copied'); }, 1600);
  });

  function openModal(idx) {
    currentIdx = idx;
    editingLink = -1;
    setCardParam(idx);
    renderModal();
    scrim.classList.add('open');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => requestAnimationFrame(() => scrim.classList.add('visible')));
    (readMode() === 'manage' ? mTitle : document.getElementById('closeBtn')).focus();
  }
  function closeModal() {
    scrim.classList.remove('visible');
    document.body.style.overflow = '';
    delCardBtn.classList.remove('confirm');
    delCardBtn.textContent = 'Delete card';
    setTimeout(() => scrim.classList.remove('open'), 300);
    currentIdx = -1;
    setCardParam(-1);
  }
  function renderModal() {
    if (currentIdx < 0 || currentIdx >= DATA.length) { closeModal(); return; }
    const card = DATA[currentIdx];
    mTitle.value = card.title;
    mCat.value = card.cat;
    if (card.items.length === 0) {
      mList.innerHTML = '<li class="no-links">No links yet.</li>';
    } else {
      mList.innerHTML = card.items.map((i, k) => {
        if (editingLink === k) {
          return `<li class="editing">
            <input class="e-name" value="${esc(i.name)}" placeholder="Name">
            <input class="e-url"  value="${esc(i.url)}"  placeholder="https://…">
            <div class="edit-row">
              <button class="cancel" data-act="cancel">Cancel</button>
              <button class="save"   data-act="save" data-k="${k}">Save</button>
            </div>
          </li>`;
        }
        return `<li>
          <a href="${esc(safeUrl(i.url) || '#')}" target="_blank" rel="noopener noreferrer">${esc(i.name)}</a>
          <span class="row-actions">
            <button data-act="edit" data-k="${k}" aria-label="Edit">&#9998;</button>
            <button class="del" data-act="del" data-k="${k}" aria-label="Delete">&times;</button>
          </span>
        </li>`;
      }).join('');
    }
    addName.value = '';
    addUrl.value = '';
  }

  // Title / category inline edits
  mTitle.addEventListener('input', () => {
    if (currentIdx < 0) return;
    DATA[currentIdx].title = str(mTitle.value, 120) || 'Untitled';
    setCardParam(currentIdx);
    saveData(); render(); renderChips();
  });
  mCat.addEventListener('input', () => {
    if (currentIdx < 0) return;
    DATA[currentIdx].cat = str(mCat.value, 80) || 'Misc';
    saveData(); render(); renderChips();
  });

  // List row actions (event delegation)
  mList.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const act = btn.dataset.act;
    const k = Number(btn.dataset.k);
    if (act === 'edit') {
      editingLink = k; renderModal();
      setTimeout(() => mList.querySelector('.e-name')?.focus(), 0);
    } else if (act === 'del') {
      DATA[currentIdx].items.splice(k, 1); saveData(); render(); renderModal();
    } else if (act === 'cancel') {
      editingLink = -1; renderModal();
    } else if (act === 'save') {
      const li = btn.closest('li');
      const name = str(li.querySelector('.e-name').value, 200);
      const url  = safeUrl(li.querySelector('.e-url').value);
      if (!name) return;
      if (!url) { alert('Only http(s):// links are allowed.'); return; }
      DATA[currentIdx].items[Number(btn.dataset.k)] = { name, url };
      editingLink = -1; saveData(); render(); renderModal();
    }
  });
  mList.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.target.classList.contains('e-name') || e.target.classList.contains('e-url'))) {
      const btn = e.target.closest('li')?.querySelector('[data-act="save"]');
      if (btn) { e.preventDefault(); btn.click(); }
    }
  });

  // Add link
  function addLink() {
    if (currentIdx < 0) return;
    const name = str(addName.value, 200);
    const url = safeUrl(addUrl.value);
    if (!name || !addUrl.value.trim()) return;
    if (!url) { alert('Only http(s):// links are allowed.'); return; }
    DATA[currentIdx].items.push({ name, url });
    saveData(); render(); renderModal();
    setTimeout(() => addName.focus(), 0);
  }
  addBtn.addEventListener('click', addLink);
  [addName, addUrl].forEach(inp => inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addLink(); }
  }));

  // Delete card (two-click confirm)
  delCardBtn.addEventListener('click', () => {
    if (!delCardBtn.classList.contains('confirm')) {
      delCardBtn.classList.add('confirm');
      delCardBtn.textContent = 'Click again to delete';
      setTimeout(() => { delCardBtn.classList.remove('confirm'); delCardBtn.textContent = 'Delete card'; }, 3000);
      return;
    }
    DATA.splice(currentIdx, 1);
    saveData(); closeModal(); render(); renderChips();
  });

  // FAB — new card
  fab.addEventListener('click', () => {
    DATA.unshift({ cat: activeCat !== 'All' ? activeCat : 'Misc', title: 'Untitled', items: [] });
    saveData(); renderChips(); render(); openModal(0);
    setTimeout(() => { mTitle.select(); }, 50);
  });

  // Scrim / search / close
  scrim.addEventListener('click', (e) => { if (e.target === scrim) closeModal(); });
  document.getElementById('closeBtn').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  q.addEventListener('input', e => { query = e.target.value.trim().toLowerCase(); render(); });

  // Publish
  if (publishBtn) publishBtn.addEventListener('click', publishToGitHub);

  // Boot
  applyMode();
  initialLoad();
