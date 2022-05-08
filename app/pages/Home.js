import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, reg} from '../helpers/_index';
import Layout from '../Layout';
import Modal from 'react-native-modal';
import Title from '../components/Title';

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(true);
  }, []);

  const closeModal = () => {
    setTimeout(() => setOpenModal(false), 250);
  };

  return (
    <Layout>
      <Title title="Home Screen" />
      <Modal isVisible={openModal} deviceWidth={reg.screenWidth}>
        <View style={styles.container}>
          <View style={styles.padding}>
            <Text style={[styles.message, {color: colors.black}]}>
              You have successfully registered
            </Text>
          </View>
          <TouchableOpacity onPress={closeModal} style={styles.button}>
            <Text style={styles.message}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: reg.screenWidth / 1.8,
    borderRadius: reg.px(16),
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.main,
  },
  message: {
    color: colors.main,
    textAlign: 'center',
    fontSize: reg.px(16),
    fontWeight: '500',
  },
  button: {
    borderTopColor: colors.main,
    borderTopWidth: reg.px(1),
    borderBottomLeftRadius: reg.px(16),
    borderBottomRightRadius: reg.px(16),
    backgroundColor: colors.orange,
    paddingHorizontal: reg.px(20),
    paddingVertical: reg.px(12),
  },
  padding: {
    paddingHorizontal: reg.px(24),
    paddingVertical: reg.px(16),
  },
});

export default HomePage;
