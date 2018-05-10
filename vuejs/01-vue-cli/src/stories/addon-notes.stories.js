import { storiesOf } from '@storybook/vue'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Addon', module)
  .addDecorator(withNotes)
  .add('Simple', () => ({
    template: `<p>Lorem ipsum dolor <bold>sit</bold> amet, consectetur adipisicing elit. Consectetur rem alias voluptatem, nostrum quis odit distinctio accusantium molestias minima, dolorem doloribus mollitia, fuga omnis quas tenetur dolores. Enim, quidem ipsa.</p>`
  }), {
    notes: 'My notes on some bold text'
  })
