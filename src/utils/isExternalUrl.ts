export function isExternalUrl(url: string, includeMailtoUrl = false) {
  try {
    const parsed = new URL(url)
    if (includeMailtoUrl && parsed.protocol === 'mailto:')
      return true
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  }
  catch {
    return false
  }
}
