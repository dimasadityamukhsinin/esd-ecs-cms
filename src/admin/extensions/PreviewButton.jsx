import React from 'react'
import { Button } from '@strapi/design-system/Button'
import Eye from '@strapi/icons/Eye'
import { useCMEditViewDataManager } from '@strapi/helper-plugin'
import { useIntl } from 'react-intl'

const PreviewButton = () => {
  const { formatMessage } = useIntl()
  const { modifiedData, layout } = useCMEditViewDataManager()

  if (
    !modifiedData.publishedAt ||
    layout.apiID !== 'modul' ||
    !modifiedData.Slug
  ) {
    return null
  }

  const handlePreview = () => {
    let previewUrl = `https://esd-ecs.vercel.app/preview/${modifiedData.id}`

    window.open(previewUrl, '_blank').focus()
  }

  const content = {
    id: 'components.PreviewButton.button',
    defaultMessage: 'Preview',
  }

  return (
    <>
      <Button variant="secondary" startIcon={<Eye />} onClick={handlePreview}>
        {formatMessage(content)}
      </Button>
    </>
  )
}

export default PreviewButton
