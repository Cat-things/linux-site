// Devlog entries written from the kat-linux/distro git history (newest first).
// Commit messages are quoted exactly as they appear in `git log`.

export interface Commit {
  hash: string;
  date: string; // YYYY-MM-DD (author date)
  author: string;
  message: string;
}

export interface DevlogEntry {
  slug: string;
  date: string; // date of the newest commit in the entry
  title: string;
  summary: string;
  body: string[];
  files: string[];
  commits: Commit[];
}

export const devlog: DevlogEntry[] = [
  {
    slug: 'wallpapers-and-a-todo-list',
    date: '2026-11-07',
    title: 'Wallpapers, a new boot splash and a to-do list',
    summary:
      'The live desktop gets its own wallpaper, the BIOS boot menu gets a new splash, and the README now tracks what is done.',
    body: [
      'Two wallpapers landed in /usr/share/backgrounds/kat/: default.png, a kitten saying "hello there", and wires.png. A new Xfce desktop config in /etc/skel points every workspace on every monitor at default.png, so the live user sees it on first login.',
      'The syslinux splash.png behind the BIOS boot menu was replaced with a new image.',
      'The README gained a to-do list: Base ArchISO is checked off, while Full Appearance and Custom Package Manager are still open.',
      'And for anyone who goes looking, the live user now has a file at ~/cool/cool/cool/cool/cool/cool/cool/cool/cool/cool/hi.',
    ],
    files: [
      'README.md',
      'airootfs/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-desktop.xml',
      'airootfs/usr/share/backgrounds/kat/',
      'syslinux/splash.png',
    ],
    commits: [{ hash: '558b5d5', date: '2026-11-07', author: 'lamps-dev', message: 'feat: readme' }],
  },
  {
    slug: 'lightdm-fixed',
    date: '2026-11-06',
    title: 'LightDM fixed, plus sound, networking and Firefox',
    summary:
      'The display manager symlink now points at the right place, the greeter is set, and the live desktop gets audio, a network applet and a browser.',
    body: [
      'The display-manager.service symlink pointed at a path inside the repo (airootfs/usr/lib/...) instead of /usr/lib/systemd/system/lightdm.service on the running system. That is fixed, and lightdm.conf now names lightdm-slick-greeter as the greeter and /etc/lightdm/Xsession as the session wrapper.',
      'Nine packages joined the ISO: lightdm-slick-greeter, xorg-server, networkmanager, network-manager-applet, pipewire, pipewire-pulse, wireplumber, pavucontrol and firefox.',
      "The live user's home directory /home/archie is now kept in git and gets its owner and 750 permissions set in profiledef.sh. The hostname changed from archiso to katlinux.",
    ],
    files: [
      'airootfs/etc/lightdm/lightdm.conf',
      'airootfs/etc/systemd/system/display-manager.service',
      'airootfs/etc/hostname',
      'packages.x86_64',
      'profiledef.sh',
    ],
    commits: [
      { hash: 'e2fba35', date: '2026-11-06', author: 'lamps-dev', message: 'keep archie home in git' },
      { hash: 'fcb7a58', date: '2026-11-06', author: 'lamps-dev', message: 'lightdm: fix everything' },
      { hash: '2b22c47', date: '2026-11-06', author: 'LampYT', message: 'yay' },
    ],
  },
  {
    slug: 'bios-menu-says-kat-linux',
    date: '2026-09-30',
    title: 'The BIOS boot menu says Kat Linux',
    summary: 'Syslinux now titles its menu "Kat Linux", and the README starts recruiting developers.',
    body: [
      'The syslinux menu title changed from Arch Linux to Kat Linux, and both BIOS entries (normal and with speech) now read "Kat Linux install medium".',
      'The README was rewritten: "Kat Linux is a cat-related linux distro, based on Arch Linux!", along with a call for developers to join the Discord and pick the "Looking to Dev" role.',
    ],
    files: ['syslinux/archiso_head.cfg', 'syslinux/archiso_sys-linux.cfg', 'README.md'],
    commits: [
      { hash: '61d6325', date: '2026-09-30', author: 'lamps-dev', message: 'Update README' },
      { hash: '15b1dcf', date: '2026-09-30', author: 'lamps-dev', message: 'kat linux' },
      { hash: '5185ec2', date: '2026-09-30', author: 'lamps-dev', message: 'kat linux branding x2' },
    ],
  },
  {
    slug: 'kitty-broadcom-loopback',
    date: '2026-09-05',
    title: 'kitty joins, Calamares leaves, Broadcom gets DKMS',
    summary:
      'An afternoon of package changes: a new terminal, a short-lived graphical installer and a Broadcom Wi-Fi driver fix.',
    body: [
      'kitty was added as the terminal. Calamares was added in the same commit and removed again a few minutes later, so archinstall remains the installer.',
      'The broadcom-wl package was swapped for broadcom-wl-dkms.',
      'The GRUB loopback config, used when another GRUB boots the ISO file directly, now names its entries "Kat Linux install medium".',
    ],
    files: ['packages.x86_64', 'grub/loopback.cfg'],
    commits: [
      { hash: '152244f', date: '2026-09-05', author: 'lamps-dev', message: 'Kat linuxify' },
      { hash: '2f8c6f7', date: '2026-09-05', author: 'lamps-dev', message: 'fix for broadcom-wl' },
      { hash: '0ec176f', date: '2026-09-05', author: 'lamps-dev', message: 'maybe fix..?' },
      { hash: '97bbbc4', date: '2026-09-05', author: 'lamps-dev', message: 'Remove calamares from packages.x86_64' },
      { hash: '6f67451', date: '2026-09-05', author: 'lamps-dev', message: 'calamares and kitty' },
    ],
  },
  {
    slug: 'grub-branding',
    date: '2026-06-11',
    title: 'GRUB menu branding',
    summary: 'The GRUB menu entries are renamed to Kat Linux.',
    body: [
      'grub.cfg now offers "Kat Linux install medium" and "Kat Linux install medium with screen reader", and the power entries are capitalised as System Shutdown and System Restart.',
    ],
    files: ['grub/grub.cfg'],
    commits: [
      {
        hash: '9cb0af3',
        date: '2026-06-11',
        author: 'lamps-dev',
        message: 'some branding (i just updated this now damn)',
      },
    ],
  },
  {
    slug: 'automated-iso-builds',
    date: '2025-12-10',
    title: 'Automated ISO builds on GitHub Actions',
    summary:
      'Every push to main now builds an ISO in an Arch Linux container and publishes it to the "latest" release. It took ten commits to get there.',
    body: [
      'The new Build ISO workflow runs in the archlinux:latest container with --privileged, refreshes the package databases, installs archiso and runs mkarchiso. The finished ISO is attached to a GitHub release tagged latest, named "Latest ArchISO Build", with the source commit and build time in the description.',
      'Getting the upload right took several attempts at different release actions before settling on softprops/action-gh-release and granting the workflow write access to repository contents.',
      'The same day, the LightDM config got a one-character fix ([Seat: *] became [Seat:*]), and the fbdev and VESA Xorg drivers were added. The commit message at the time: "Xorg still does not work".',
    ],
    files: ['.github/workflows/buildiso.yml', 'airootfs/etc/lightdm/lightdm.conf', 'packages.x86_64'],
    commits: [
      { hash: '37410e5', date: '2025-12-10', author: 'WahPlus', message: 'Update buildiso.yml' },
      {
        hash: 'f1293ce',
        date: '2025-12-09',
        author: 'WahPlus',
        message: 'Added the fbdev and vesa packages. Xorg still does not work',
      },
      { hash: 'd880b94', date: '2025-12-09', author: 'WahPlus', message: 'I am losing my mind' },
      {
        hash: 'ff987d0',
        date: '2025-12-09',
        author: 'WahPlus',
        message: 'Enhance buildiso workflow with GitHub Release step',
      },
      { hash: '9a86002', date: '2025-12-09', author: 'WahPlus', message: 'Will it FUCKING WORK FOR ONCE' },
      {
        hash: 'f0715cd',
        date: '2025-12-09',
        author: 'WahPlus',
        message: 'Update upload action in buildiso workflow again',
      },
      { hash: '66cdc09', date: '2025-12-09', author: 'WahPlus', message: 'Change upload action for GitHub releases' },
      {
        hash: '2153968',
        date: '2025-12-09',
        author: 'WahPlus',
        message: 'Replace push action with upload to release action',
      },
      { hash: '7295ecc', date: '2025-12-09', author: 'WahPlus', message: 'Add privileged option to build container' },
      {
        hash: '233bace',
        date: '2025-12-09',
        author: 'WahPlus',
        message: 'Add step to get database files in buildiso workflow',
      },
      {
        hash: '3f487b4',
        date: '2025-12-09',
        author: 'WahPlus',
        message: 'Add GitHub Actions workflow to build the Kat Linux ISO',
      },
      { hash: '8d38be7', date: '2025-12-09', author: 'WahPlus', message: 'Fixed LightDM not working' },
    ],
  },
  {
    slug: 'first-profile',
    date: '2025-12-08',
    title: 'The first profile: Xfce, LightDM and the archie user',
    summary:
      'A barebones archiso profile goes in, gets renamed to Kat Linux, enables multilib and boots into an Xfce desktop as the user archie.',
    body: [
      'The first archiso profile was committed with the message "yes i just uploaded a barebone (we will config in the future". It brought the boot menus, the live system configs in airootfs and the package list.',
      'profiledef.sh was updated to build katlinux ISOs labelled KAT_YYYYMM and published by the Kat Linux Group. The multilib repository was enabled in pacman.conf, and the work/ build directory was added to .gitignore.',
      'Xfce, xfce4-goodies and LightDM were added, along with a live user called archie who is logged in automatically.',
    ],
    files: ['profiledef.sh', 'pacman.conf', 'airootfs/etc/lightdm/lightdm.conf', 'airootfs/etc/passwd', 'packages.x86_64'],
    commits: [
      {
        hash: '76c8cd8',
        date: '2025-12-08',
        author: 'WahPlus',
        message: 'Added Xfce, LightDM and an archie user with autologin',
      },
      { hash: '47b6f3d', date: '2025-12-08', author: 'WahPlus', message: 'Fixed pacman.conf by including multilib properly' },
      { hash: '23b6587', date: '2025-12-08', author: 'WahPlus', message: 'Changed references to Arch to Kat Linux' },
      {
        hash: '9b6ee4b',
        date: '2025-12-08',
        author: 'WahPlus',
        message: "Made git ignore work/ directory since it's temporary",
      },
      { hash: 'c7717ad', date: '2025-12-08', author: 'CubxyDev', message: 'Enable multilib repository in pacman.conf' },
      { hash: '0e526c5', date: '2025-12-08', author: 'user0-07161', message: 'Just the basics of archiso' },
    ],
  },
  {
    slug: 'repository-created',
    date: '2025-11-18',
    title: 'The repository is created',
    summary: 'kat-linux/distro starts with a README and a license.',
    body: [
      'The repository opened with an initial commit and a one-line README: "This repository is the distro made with ArchISO." The same day, the Apache 2.0 license from the initial commit was replaced by the GNU GPL v3.',
    ],
    files: ['README.md', 'LICENSE'],
    commits: [
      { hash: 'cb5240c', date: '2025-11-18', author: 'CubxyDev', message: 'Add LICENSE file' },
      { hash: '2a22f26', date: '2025-11-18', author: 'lamps-dev', message: 'Add README with repository description' },
      { hash: 'b70e1a6', date: '2025-11-18', author: 'lamps-dev', message: 'Initial commit' },
    ],
  },
];

export const commitTotal = devlog.reduce((n, e) => n + e.commits.length, 0);

export function formatDate(iso: string, style: 'long' | 'short' = 'long'): string {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
