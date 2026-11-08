// Facts about Kat Linux, taken from the kat-linux/distro repository.
// Every value here should be traceable to a file in that repo (see `source`).

export const links = {
  repo: 'https://github.com/kat-linux/distro',
  org: 'https://github.com/kat-linux',
  issues: 'https://github.com/kat-linux/distro/issues',
  newIssue: 'https://github.com/kat-linux/distro/issues/new',
  release: 'https://github.com/kat-linux/distro/releases/tag/latest',
  actions: 'https://github.com/kat-linux/distro/actions',
  discord: 'https://discord.gg/DCvRzJsYTD',
  cloneUrl: 'https://github.com/kat-linux/distro.git',
  archWiki: 'https://wiki.archlinux.org/',
  aur: 'https://aur.archlinux.org/',
  archPackages: 'https://archlinux.org/packages/',
  ventoy: 'https://www.ventoy.net/',
  etcher: 'https://etcher.balena.io/',
} as const;

/** Link to a file (or folder) in the distro repo on GitHub. */
export function repoFile(path: string): string {
  const clean = path.replace(/^\/+/, '');
  const isDir = clean.endsWith('/');
  return `${links.repo}/${isDir ? 'tree' : 'blob'}/main/${clean.replace(/\/$/, '')}`;
}

export function commitUrl(hash: string): string {
  return `${links.repo}/commit/${hash}`;
}

/** profiledef.sh */
export const iso = {
  name: 'katlinux',
  filePattern: 'katlinux-YYYY.MM.DD-x86_64.iso',
  label: 'KAT_YYYYMM',
  publisher: 'Kat Linux Group <https://github.com/kat-linux>',
  application: 'Kat Linux Live/Rescue/Installation Media',
  arch: 'x86_64',
  bootmodes: ['bios.syslinux', 'uefi.systemd-boot'],
  compression: 'squashfs, xz',
  releaseTag: 'latest',
  releaseName: 'Latest ArchISO Build',
} as const;

/** README.md "Todo" list */
export const readmeTodo = [
  { label: 'Base ArchISO', done: true },
  { label: 'Full Appearance', done: false },
  { label: 'Custom Package Manager', done: false },
] as const;

/** The real BIOS boot menu: syslinux/archiso_sys-linux.cfg + archiso_tail.cfg */
export const biosMenu = {
  title: 'Kat Linux',
  timeoutSeconds: 15, // TIMEOUT 150 (tenths of a second) in archiso_sys.cfg
  entries: [
    {
      label: 'Kat Linux install medium (x86_64, BIOS)',
      help: ['Boot the Kat Linux install medium on BIOS.', 'It allows you to install Kat Linux or perform system maintenance.'],
    },
    {
      label: 'Kat Linux install medium (x86_64, BIOS) with speech',
      hotkey: 's',
      help: [
        'Boot the Kat Linux install medium on BIOS with speakup screen reader.',
        'It allows you to install Kat Linux or perform system maintenance with speech feedback.',
      ],
    },
    {
      label: 'Boot existing OS',
      help: ['Boot an existing operating system.', 'Press TAB to edit the disk and partition number to boot.'],
    },
    { label: 'Run Memtest86+ (RAM test)', help: [] },
    { label: 'Hardware Information (HDT)', help: [] },
    { label: 'Reboot', help: ['Reboot computer.', "The computer's firmware must support APM."] },
    { label: 'Power Off', help: ['Power off computer.', "The computer's firmware must support APM."] },
  ],
} as const;

/** efiboot/loader/ — systemd-boot entries (titles not rebranded yet) */
export const uefiMenu = {
  timeoutSeconds: 15,
  entries: [
    'Arch Linux install medium (x86_64, UEFI)',
    'Arch Linux install medium (x86_64, UEFI) with speech',
    'Memtest86+',
  ],
} as const;

/** Spots in the profile that still use upstream archiso / Arch wording. */
export const upstreamLeftovers = [
  {
    where: 'efiboot/loader/entries/',
    what: 'The UEFI (systemd-boot) menu entries are still titled "Arch Linux install medium".',
  },
  {
    where: 'syslinux/archiso_pxe-linux.cfg',
    what: 'The network-boot (PXE) entries still say "Arch Linux install medium".',
  },
  {
    where: 'airootfs/etc/motd',
    what: 'The console login message still reads "To install Arch Linux follow the installation guide".',
  },
  {
    where: 'airootfs/usr/local/bin/Installation_guide',
    what: 'The Installation_guide helper opens the Arch Linux installation guide on the Arch wiki.',
  },
  {
    where: '.github/workflows/buildiso.yml',
    what: 'The automated release is named "Latest ArchISO Build".',
  },
] as const;

export const disclaimer =
  'Kat Linux is an independent project and is not affiliated with Arch Linux. Arch Linux is a trademark of its respective owners.';
