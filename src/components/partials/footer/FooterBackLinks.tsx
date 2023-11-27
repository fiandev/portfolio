"use client"

export default function FooterBackLinks ({ links }) {
  return (
    <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                {links
                  ? links.map((link) => {
                      return (
                        <li>
                          <Link href={link.href || "#"} class="hover:underline">
                            {link.text}
                          </Link>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
    )
}