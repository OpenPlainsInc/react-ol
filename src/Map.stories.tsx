import type { Meta, StoryObj } from '@storybook/react';

import Map from './Map';
import TileLayer from './Layers/TileLayer';
import osmSource from './Sources/osm';

const meta: Meta<typeof Map> = {
    title: 'Map',
    component: Map
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Basic: Story = {
    render: () => <Map zoom={1} center={[0, 0]}>
        <TileLayer
            source={osmSource()}
        />
    </Map>
}

