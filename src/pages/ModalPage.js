import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc
        metus, sollicitudin at sapien vel, efficitur vestibulum nunc. Vestibulum
        ac dictum urna. Nullam vehicula massa vel tellus efficitur, a ultricies
        nisl imperdiet. Vestibulum cursus lectus non porttitor gravida. Praesent
        vestibulum mi arcu, nec eleifend arcu feugiat vel. Aenean at purus a
        ipsum semper fermentum ut vitae augue. Morbi sed erat varius, ornare
        eros a, dapibus massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer ullamcorper tincidunt
        elit, sit amet ornare libero accumsan id. Vestibulum at justo elit.
        Nullam ut tincidunt elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc
        metus, sollicitudin at sapien vel, efficitur vestibulum nunc. Vestibulum
        ac dictum urna. Nullam vehicula massa vel tellus efficitur, a ultricies
        nisl imperdiet. Vestibulum cursus lectus non porttitor gravida. Praesent
        vestibulum mi arcu, nec eleifend arcu feugiat vel. Aenean at purus a
        ipsum semper fermentum ut vitae augue. Morbi sed erat varius, ornare
        eros a, dapibus massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer ullamcorper tincidunt
        elit, sit amet ornare libero accumsan id. Vestibulum at justo elit.
        Nullam ut tincidunt elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc
        metus, sollicitudin at sapien vel, efficitur vestibulum nunc. Vestibulum
        ac dictum urna. Nullam vehicula massa vel tellus efficitur, a ultricies
        nisl imperdiet. Vestibulum cursus lectus non porttitor gravida. Praesent
        vestibulum mi arcu, nec eleifend arcu feugiat vel. Aenean at purus a
        ipsum semper fermentum ut vitae augue. Morbi sed erat varius, ornare
        eros a, dapibus massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer ullamcorper tincidunt
        elit, sit amet ornare libero accumsan id. Vestibulum at justo elit.
        Nullam ut tincidunt elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc
        metus, sollicitudin at sapien vel, efficitur vestibulum nunc. Vestibulum
        ac dictum urna. Nullam vehicula massa vel tellus efficitur, a ultricies
        nisl imperdiet. Vestibulum cursus lectus non porttitor gravida. Praesent
        vestibulum mi arcu, nec eleifend arcu feugiat vel. Aenean at purus a
        ipsum semper fermentum ut vitae augue. Morbi sed erat varius, ornare
        eros a, dapibus massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer ullamcorper tincidunt
        elit, sit amet ornare libero accumsan id. Vestibulum at justo elit.
        Nullam ut tincidunt elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc
        metus, sollicitudin at sapien vel, efficitur vestibulum nunc. Vestibulum
        ac dictum urna. Nullam vehicula massa vel tellus efficitur, a ultricies
        nisl imperdiet. Vestibulum cursus lectus non porttitor gravida. Praesent
        vestibulum mi arcu, nec eleifend arcu feugiat vel. Aenean at purus a
        ipsum semper fermentum ut vitae augue. Morbi sed erat varius, ornare
        eros a, dapibus massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer ullamcorper tincidunt
        elit, sit amet ornare libero accumsan id. Vestibulum at justo elit.
        Nullam ut tincidunt elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc
        metus, sollicitudin at sapien vel, efficitur vestibulum nunc. Vestibulum
        ac dictum urna. Nullam vehicula massa vel tellus efficitur, a ultricies
        nisl imperdiet. Vestibulum cursus lectus non porttitor gravida. Praesent
        vestibulum mi arcu, nec eleifend arcu feugiat vel. Aenean at purus a
        ipsum semper fermentum ut vitae augue. Morbi sed erat varius, ornare
        eros a, dapibus massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer ullamcorper tincidunt
        elit, sit amet ornare libero accumsan id. Vestibulum at justo elit.
        Nullam ut tincidunt elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc
        metus, sollicitudin at sapien vel, efficitur vestibulum nunc. Vestibulum
        ac dictum urna. Nullam vehicula massa vel tellus efficitur, a ultricies
        nisl imperdiet. Vestibulum cursus lectus non porttitor gravida. Praesent
        vestibulum mi arcu, nec eleifend arcu feugiat vel. Aenean at purus a
        ipsum semper fermentum ut vitae augue. Morbi sed erat varius, ornare
        eros a, dapibus massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer ullamcorper tincidunt
        elit, sit amet ornare libero accumsan id. Vestibulum at justo elit.
        Nullam ut tincidunt elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc
        metus, sollicitudin at sapien vel, efficitur vestibulum nunc. Vestibulum
        ac dictum urna. Nullam vehicula massa vel tellus efficitur, a ultricies
        nisl imperdiet. Vestibulum cursus lectus non porttitor gravida. Praesent
        vestibulum mi arcu, nec eleifend arcu feugiat vel. Aenean at purus a
        ipsum semper fermentum ut vitae augue. Morbi sed erat varius, ornare
        eros a, dapibus massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer ullamcorper tincidunt
        elit, sit amet ornare libero accumsan id. Vestibulum at justo elit.
        Nullam ut tincidunt elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc
        metus, sollicitudin at sapien vel, efficitur vestibulum nunc. Vestibulum
        ac dictum urna. Nullam vehicula massa vel tellus efficitur, a ultricies
        nisl imperdiet. Vestibulum cursus lectus non porttitor gravida. Praesent
        vestibulum mi arcu, nec eleifend arcu feugiat vel. Aenean at purus a
        ipsum semper fermentum ut vitae augue. Morbi sed erat varius, ornare
        eros a, dapibus massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer ullamcorper tincidunt
        elit, sit amet ornare libero accumsan id. Vestibulum at justo elit.
        Nullam ut tincidunt elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc
        metus, sollicitudin at sapien vel, efficitur vestibulum nunc. Vestibulum
        ac dictum urna. Nullam vehicula massa vel tellus efficitur, a ultricies
        nisl imperdiet. Vestibulum cursus lectus non porttitor gravida. Praesent
        vestibulum mi arcu, nec eleifend arcu feugiat vel. Aenean at purus a
        ipsum semper fermentum ut vitae augue. Morbi sed erat varius, ornare
        eros a, dapibus massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer ullamcorper tincidunt
        elit, sit amet ornare libero accumsan id. Vestibulum at justo elit.
        Nullam ut tincidunt elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc
        metus, sollicitudin at sapien vel, efficitur vestibulum nunc. Vestibulum
        ac dictum urna. Nullam vehicula massa vel tellus efficitur, a ultricies
        nisl imperdiet. Vestibulum cursus lectus non porttitor gravida. Praesent
        vestibulum mi arcu, nec eleifend arcu feugiat vel. Aenean at purus a
        ipsum semper fermentum ut vitae augue. Morbi sed erat varius, ornare
        eros a, dapibus massa. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer ullamcorper tincidunt
        elit, sit amet ornare libero accumsan id. Vestibulum at justo elit.
        Nullam ut tincidunt elit.
      </p>
    </div>
  );
}

export default ModalPage;
