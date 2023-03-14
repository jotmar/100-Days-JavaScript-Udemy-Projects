const linkTab = document.querySelector('.pasteTab')
const linkSection = document.querySelector('.linkDirect')
linkTab.param = [linkTab, linkSection]

const audioTab = document.querySelector('.audioTab')
const audioSection = document.querySelector('.audioDirect')
audioTab.param = [audioTab, audioSection]

const videoTab = document.querySelector('.videoTab')
const videoSection = document.querySelector('.videoDirect')
videoTab.param = [videoTab, videoSection]

const googleLink = document.querySelector('#googleLink')
const generateLinkButton = document.querySelector('.generateLinkButton')
const linkTextAreas = document.querySelectorAll('#linkArea')
const copyButtons = document.querySelectorAll('.copyButton')

function changeTab(event) {
  linkTab.id = ''
  linkSection.style.display = 'none'

  audioTab.id = ''
  audioSection.style.display = 'none'

  videoTab.id = ''
  videoSection.style.display = 'none'

  event.currentTarget.param[0].id = 'selectedButton'
  event.currentTarget.param[1].style.display = 'flex'
}

linkTab.addEventListener('click', changeTab)

audioTab.addEventListener('click', changeTab)

videoTab.addEventListener('click', changeTab)

generateLinkButton.addEventListener('click', e => {
  const videoLink = googleLink.value.replace('/view?usp=share_link', '')
  const id = googleLink.value.split('/')[5]
  const fullLink = 'https://drive.google.com/uc?export=download&id=' + id
  linkTextAreas[0].value = fullLink
  linkTextAreas[1].value = `<audio width="300" height="32" controls src="${fullLink}" type="audio/mp3"></audio>`
  linkTextAreas[2].value = `<iframe src="${videoLink}/preview" width="640" height="480"></iframe>`
})

for (let i = 0; i < 3; i++) {
  copyButtons[i].addEventListener('click', e => {
    const copyText = linkTextAreas[i].value
    navigator.clipboard
      .writeText(copyText)
      .then(alert('Copied to Clipboard!', i))
  })
}
